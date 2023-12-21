
import React from "react";
import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc,
  getDocs,
  getDoc,
  updateDoc,
  query,
  limit,
  orderBy,
  startAfter,
  where,
  arrayUnion,
  onSnapshot 
} from "firebase/firestore";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,  
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

const fireBaseContext = React.createContext();

export default function FireBaseProvider({children}){

  const [isUserSignedIn, setIsUserSignedIn] = React.useState(false) 
  const[count, setCount] = React.useState(0)
  const [isUserDisplayName, setIsUserDisplayName] = React.useState(false)
  
  const firebaseConfig = {
    apiKey: "AIzaSyAzPEh_tl-SY0Sql4i5s5P-QNGZdyMbNBc",
    authDomain: "online-shop-new.firebaseapp.com",
    projectId: "online-shop-new",
    storageBucket: "online-shop-new.appspot.com",
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider()
  
  const [userData, setUserData] = React.useState()
  const [userFireStoreData, setUserFireStoreData] = React.useState()
  
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserSignedIn(true);
        setUserData(auth.currentUser);
        
      } else {
        setIsUserSignedIn(false);
        setUserData();
      }
    });
    
    // Cleanup function: Unsubscribe from the authentication state changes
    return () => unsubscribe();
  }, []);
  React.useEffect(()=>{
    setIsUserDisplayName(userData?.displayName?true:false)
    getUserFireStoreDoc()
    },[userData])
  
  function signOutUser(){
    console.log('logging out')
  signOut(auth)
  .then(() => {
      // Sign-out successful.
      console.log(userData)
    }).catch((error) => {
      // An error happened.
    });
  }

  async function profileNameUpdate(displayName, uid) {
    const authUpdatePromise = new Promise((resolve, reject) => {
      updateProfile(auth.currentUser, {
        displayName: displayName
      })
      .then(() => resolve())
      .catch((error) => reject(error));
    });
  
    const firestoreUpdatePromise = new Promise((resolve, reject) => {
      const userDocRef = doc(db, 'users', uid);
      updateDoc(userDocRef, {
        displayName: displayName
      })
      .then(() => resolve())
      .catch((error) => reject(error));
    });
  
    // Wait for both promises to resolve
    await Promise.all([authUpdatePromise, firestoreUpdatePromise]);
  
    console.log("Profile update completed!");
  }

  async function createUserDoc(user){ // creates a user Doc in fireStore 
    console.log('creating user document')
    try {
      const userDocRef = doc(db, 'users', user.uid);
      const docSnapshot = await getDoc(userDocRef)
      if(!docSnapshot.exists()){
        await setDoc(userDocRef, {
          displayName: user.displayName,
          email: user.email,
          address: [],
          paymentInfo: [],
          orders: [],
        });
      }
    } 
    catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async function addUserAddress(dataObj){
    try{
      const userDocRef = doc(db, 'users', userData.uid);
      await updateDoc(userDocRef, {
        address: arrayUnion(dataObj)
      })
      console.log('address added')
    }
    catch(e){console.error(e)}
  }

  async function updateUserAddress(dataArr){
    try{
      const userDocRef = doc(db, 'users', userData.uid);
      await updateDoc(userDocRef, {
        address: dataArr
      })
      console.log('address updated')
    }
    catch(e){console.error(e)}
  }

  async function addUserPaymentInfo(dataObj){
    try{
      const userDocRef = doc(db, 'users', userData.uid);
      await updateDoc(userDocRef, {
        paymentInfo: arrayUnion(dataObj)
      })
      console.log('Payment info added')
    }
    catch(e){console.error(e)}
  }


  async function updateUserPaymentInfo(dataArr){
    try{
      const userDocRef = doc(db, 'users', userData.uid);
      await updateDoc(userDocRef, {
        paymentInfo: dataArr
      })
      console.log('Payment info updated')
    }
    catch(e){console.error(e)}
  }

  async function addUserOrder(dataObj){
    try{
      const userDocRef = doc(db, 'users', userData.uid);
      await updateDoc(userDocRef, {
        orders: arrayUnion(dataObj)
      })
      console.log('order added')
    }
    catch(e){console.error(e)}
  }

  async function updateUserOrder(dataArr){
    try{
      const userDocRef = doc(db, 'users', userData.uid);
      await updateDoc(userDocRef, {
        orders: dataArr
      })
      console.log('order updated')
    }
    catch(e){console.error(e)}
  }

  async function signInUsingGoogle(){
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      createUserDoc(user)
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  function createNewUserWithEmailAndPassword(email, password) {
    return new Promise((resolve, reject) => {
        if (email.length > 0 && password.length > 8) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredentials) => {
                    const credential = userCredentials;
                    const user = credential.user
                    resolve(credential);
                    createUserDoc(user)
                })
                .catch(err => {
                    const errorCode = err.code;
                    const errorMessage = err.message;
                    console.log('error code: ' + errorCode + ' error message: ' + errorMessage);
                    reject(errorCode); // Returning the error message as a string
                });
        } else if(password.length<=8) {
            reject('short password');
        }
        else {
          reject('Email and password must not be empty.');
        }
    });
}

  async function getUserFireStoreDoc(){
    try {
      const userDocRef = doc(db, 'users', userData?.uid);
      const docLiveSnapShot = onSnapshot(userDocRef, (doc)=>{setUserFireStoreData(doc.data())})
    }
    catch (e) {
    }
  }

  async function getPageinatedDocsInDb(offset, catId, priceMin, priceMax, orderFilter){
      const catIdNum = catId?parseInt(catId):null
      const priceMinNum = priceMin?parseInt(priceMin):0
      const priceMaxNum = priceMax?parseInt(priceMax):2000
      let tempArr = []

      const productsRef = collection(db, "all-products")

      function allProductsQuery(x){
        // all products 
        return query(
          productsRef,
          limit(x)
          )
      }

      function allProductsQueryStartAt(x,y){
        // all products with start after property
        return query(
          productsRef,
          startAfter(y),
          limit(x)
          )
      }

      function allProductsSortPriceAscQuery(x){ 
        // all products price ascending
        return query(
          productsRef,
          orderBy("price"),
          limit(x)
          )
      }

      function allProductsSortPriceAscQueryStartAt(x,y){ 
        // all products price ascending with start after property
        return query(
          productsRef,
          orderBy("price"),
          startAfter(y),
          limit(x)
          )
      }

      function allProductsSortPriceDecQuery(x){
        // all products price decending
        return query(
          productsRef,
          orderBy("price", "desc"),
          limit(x)
          )
      }

      function allProductsSortPriceDecQueryStartAt(x,y){
        // all products price descending with start after property
        return query(
          productsRef,
          orderBy("price", "desc"),
          startAfter(y),
          limit(x)
          )
      }

      function priceQuery(x){ 
        // all products price filter
        return query(
          productsRef,
          where("price", ">=", priceMinNum), 
          where("price", "<=", priceMaxNum),
          limit(x)
          )
      }

      function priceQueryStartAt(x,y){ 
        // all products price filter
        return query(
          productsRef,
          where("price", ">=", priceMinNum), 
          where("price", "<=", priceMaxNum),
          StartAt(y),
          limit(x)
          )
      }

      function priceQuerySortPriceAsc(x){ 
        // all products price filter order by price ascending
        return query(
          productsRef,
          where("price", ">=", priceMinNum), 
          where("price", "<=", priceMaxNum),
          orderBy("price"),
          limit(x)
          )
      }

      function priceQuerySortPriceAscStartAt(x,y){ 
        // all products price filter order by price ascending
        return query(
          productsRef,
          where("price", ">=", priceMinNum), 
          where("price", "<=", priceMaxNum),
          orderBy("price"),
          startAfter(y),
          limit(x)
          )
      }

      function priceQuerySortPriceDec(x){ 
        // all products price filter order by price descending
        return query(
          productsRef,
          where("price", ">=", priceMinNum), 
          where("price", "<=", priceMaxNum),
          orderBy("price", "desc"),
          limit(x)
          )
      }

      function priceQuerySortPriceDecStartAt(x,y){ 
        // all products price filter order by price descending
        return query(
          productsRef,
          where("price", ">=", priceMinNum), 
          where("price", "<=", priceMaxNum),
          orderBy("price", "desc"),
          startAfter(y),
          limit(x)
          )
      }

      function categoryQuery(x){ 
        // all products category filter 
        return query(
          productsRef,
          where("category.id", "==", catIdNum), 
          limit(x)
          )
      }

      function categoryQueryStartAt(x,y){ 
        // all products category filter with start after property
        return query(
          productsRef,
          where("category.id", "==", catIdNum), 
          startAfter(y),
          limit(x)
          )
      }

      function categoryQuerySortPriceAsc(x){ 
        // all products category filter sorted by price ascending
        return query(
          productsRef,
          where("category.id", "==", catIdNum), 
          orderBy("price"),
          limit(x)
          )
      }
      function categoryQuerySortPriceAscStartAt(x,y){ 
        // all products category filter sorted by price ascending with start after property
        return query(
          productsRef,
          where("category.id", "==", catIdNum), 
          orderBy("price"),
          startAfter(y),
          limit(x)
          )
      }

      function categoryQuerySortPriceDec(x){ 
        // all products category filter sorted by price descending
        return query(
          productsRef,
          where("category.id", "==", catIdNum), 
          orderBy("price", "desc"),
          limit(x)
          )
      }

      function categoryQuerySortPriceDecStartAt(x,y){ 
        // all products category filter sorted by price descending with start after property
        return query(
          productsRef,
          where("category.id", "==", catIdNum), 
          orderBy("price", "desc"),
          startAfter(y),
          limit(x)
          )
      }

      function categoryAndPriceQuery(x){ 
        // all products category and price filter 
        console.log('products category and price filter')
        return query(
          productsRef,
          where("category.id", "==", catIdNum), 
          where("price", ">=", priceMinNum), 
          where("price", "<=", priceMaxNum),
          limit(x)
          )
      }

      function categoryAndPriceQueryStartAt(x,y){ 
        // all products category and price filter with start after property
        return query(
          productsRef,
          where("category.id", "==", catIdNum), 
          where("price", ">=", priceMinNum), 
          where("price", "<=", priceMaxNum),
          startAfter(y),
          limit(x)
          )
      }

      function categoryAndPriceQuerySortPriceAsc(x){ 
        // all products category and price filter sort by price ascending 
        return query(
          productsRef,
          where("category.id", "==", catIdNum), 
          where("price", ">=", priceMinNum), 
          where("price", "<=", priceMaxNum),
          orderBy("price"),
          limit(x)
          )
      }
      function categoryAndPriceQuerySortPriceAscStartAt(x,y){ 
        // all products category and price filter sort by price ascending with start at property
        return query(
          productsRef,
          where("category.id", "==", catIdNum), 
          where("price", ">=", priceMinNum), 
          where("price", "<=", priceMaxNum),
          orderBy("price"),
          startAfter(y),
          limit(x)
          )
      }

      function categoryAndPriceQuerySortPriceDec(x){ 
        // all products category and price filter sort by price decending 
        console.log('all products category and price filter sort by price decending')
        return query(
          productsRef,
          where("category.id", "==", catIdNum), 
          where("price", ">=", priceMinNum), 
          where("price", "<=", priceMaxNum),
          orderBy("price", "desc"),
          limit(x)
          )
      }

      function categoryAndPriceQuerySortPriceDecStartAt(x,y){ 
        // all products category and price filter sort by price decending with start at property
        console.log('all products category and price filter sort by price decending with start at property')
        return query(
          productsRef,
          where("category.id", "==", catIdNum), 
          where("price", ">=", priceMinNum), 
          where("price", "<=", priceMaxNum),
          orderBy("price", "desc"),
          startAfter(y),
          limit(x)
          )
      }

      if (offset!==0){ 
        // if not first page

        if(catId&&priceMin&&priceMax&&orderFilter){ // if all filter and sort fields // condition 1
          console.log('all fields')
          if(orderFilter==="dec-price"){ // if sorting by price decending
            console.log('dec price')
            const first = categoryAndPriceQuerySortPriceDec(offset)
            const firstPageSnap = await getDocs(first)
            const lastIndexdoc = firstPageSnap.docs[firstPageSnap.docs.length-1]
            const next = categoryAndPriceQuerySortPriceDecStartAt(9,lastIndexdoc)
            const querySnapshot = await getDocs(next)
            querySnapshot.forEach((doc) => {
              const data = doc.data()
              data.id = doc.id
              tempArr.push(data)
            })
          }
          else if (orderFilter==="asc-price"){ 
            // else if sorting by price ascending
            const first = categoryAndPriceQuerySortPriceAsc(offset)
            const firstPageSnap = await getDocs(first)
            const lastIndexdoc = firstPageSnap.docs[firstPageSnap.docs.length-1]
            const next = categoryAndPriceQuerySortPriceAscStartAt(9,lastIndexdoc)
            const querySnapshot = await getDocs(next)
            querySnapshot.forEach((doc) => {
              const data = doc.data()
              data.id = doc.id
              tempArr.push(data)
            })
          }
        }

        else if(catId&&priceMin&&priceMax){ 
          // if category and price filters //condition 2
          const first = categoryAndPriceQuery(offset)
          const firstPageSnap = await getDocs(first)
          const lastIndexdoc = firstPageSnap.docs[firstPageSnap.docs.length-1]
          const next = categoryAndPriceQueryStartAt(9,lastIndexdoc)
          const querySnapshot = await getDocs(next)
          querySnapshot.forEach((doc) => {
            const data = doc.data()
            data.id = doc.id
            tempArr.push(data)
          })
        }

        else if(catId&&orderFilter){
          // if category filter and sorted by price // condition 3
          if(orderFilter==="asc-price"){
            const first = categoryQuerySortPriceAsc(offset)
            const firstPageSnap = await getDocs(first)
            const lastIndexdoc = firstPageSnap.docs[firstPageSnap.docs.length-1]
            const next = categoryQuerySortPriceAscStartAt(9,lastIndexdoc)
            const querySnapshot = await getDocs(next)
            querySnapshot.forEach((doc) => {
              const data = doc.data()
              data.id = doc.id
              tempArr.push(data)
            })
          }
          else if(orderFilter==="dec-price"){
            const first = categoryQuerySortPriceDec(offset)
            const firstPageSnap = await getDocs(first)
            const lastIndexdoc = firstPageSnap.docs[firstPageSnap.docs.length-1]
            const next = categoryQuerySortPriceDecStartAt(9,lastIndexdoc)
            const querySnapshot = await getDocs(next)
            querySnapshot.forEach((doc) => {
              const data = doc.data()
              data.id = doc.id
              tempArr.push(data)
            })
          }
        }

        else if(priceMin&&priceMax&&orderFilter){
          // if filtering by price and sorting by price // condition 4
          if(orderFilter==="asc-price"){
            // if sorting by ascending price
            const first = priceQuerySortPriceAsc(offset)
            const firstPageSnap = await getDocs(first)
            const lastIndexdoc = firstPageSnap.docs[firstPageSnap.docs.length-1]
            const next = priceQuerySortPriceAscStartAt(9,lastIndexdoc)
            const querySnapshot = await getDocs(next)
            querySnapshot.forEach((doc) => {
              const data = doc.data()
              data.id = doc.id
              tempArr.push(data)
            })            
          }
          else if(orderFilter==="dec-price"){
            //if sorting by decending price
            const first = priceQuerySortPriceDec(offset)
            const firstPageSnap = await getDocs(first)
            const lastIndexdoc = firstPageSnap.docs[firstPageSnap.docs.length-1]
            const next = priceQuerySortPriceDecStartAt(9,lastIndexdoc)
            const querySnapshot = await getDocs(next)
            querySnapshot.forEach((doc) => {
              const data = doc.data()
              data.id = doc.id
              tempArr.push(data)
            })   
          }
        }

        else if(priceMin&&priceMax){
          // if price filter // condition 5
          const first = priceQuery(offset)
          const firstPageSnap = await getDocs(first)
          const lastIndexdoc = firstPageSnap.docs[firstPageSnap.docs.length-1]
          const next = priceQueryStartAt(9,lastIndexdoc)
          const querySnapshot = await getDocs(next)
          querySnapshot.forEach((doc) => {
            const data = doc.data()
            data.id = doc.id
            tempArr.push(data)
          })
        }

        else if (catId){ 
          // if filter by category // condition 6
          const first = categoryQuery(offset)
          const firstPageSnap = await getDocs(first)
          const lastIndexdoc = firstPageSnap.docs[firstPageSnap.docs.length-1]
          const next = categoryQueryStartAt(9,lastIndexdoc)
          const querySnapshot = await getDocs(next)
          querySnapshot.forEach((doc) => {
            const data = doc.data()
            data.id = doc.id
            tempArr.push(data)
          })
        }

        else if(orderFilter){
          // if no filter sort by price // condition 7
          if(orderFilter==="asc-price"){
            // if sorting by ascending price
            const first = allProductsSortPriceAscQuery(offset)
            const firstPageSnap = await getDocs(first)
            const lastIndexdoc = firstPageSnap.docs[firstPageSnap.docs.length-1]
            const next = allProductsSortPriceAscQueryStartAt(9,lastIndexdoc)
            const querySnapshot = await getDocs(next)
            querySnapshot.forEach((doc) => {
              const data = doc.data()
              data.id = doc.id
              tempArr.push(data)
            })
          }
          else if(orderFilter==="dec-price"){
            // if sorting by descending price
            const first = allProductsSortPriceDecQuery(offset)
            const firstPageSnap = await getDocs(first)
            const lastIndexdoc = firstPageSnap.docs[firstPageSnap.docs.length-1]
            const next = allProductsSortPriceDecQueryStartAt(9,lastIndexdoc)
            const querySnapshot = await getDocs(next)
            querySnapshot.forEach((doc) => {
              const data = doc.data()
              data.id = doc.id
              tempArr.push(data)
            })
          }
        }

        else {
          // no filters and no sotring condition 8
          const first = allProductsQuery(offset)
          const firstPageSnap = await getDocs(first)
          const lastIndexdoc = firstPageSnap.docs[firstPageSnap.docs.length-1]
          const next = allProductsQueryStartAt(9,lastIndexdoc)
          const querySnapshot = await getDocs(next)
          querySnapshot.forEach((doc) => {
            const data = doc.data()
            data.id = doc.id
            tempArr.push(data)
          })
        }

      }

      else{

        if(catId&&priceMin&&priceMax&&orderFilter){ // if all filter and sort fields
          if(orderFilter==="dec-price"){ // if sorting by price decending
            const next = categoryAndPriceQuerySortPriceDec(9)
            const querySnapshot = await getDocs(next)
            querySnapshot.forEach((doc) => {
              const data = doc.data()
              data.id = doc.id
              tempArr.push(data)
            })
          }
          else if (orderFilter==="asc-price"){ // if sorting by price ascending
            const next = categoryAndPriceQuerySortPriceAsc(9)
            const querySnapshot = await getDocs(next)
            querySnapshot.forEach((doc) => {
              const data = doc.data()
              data.id = doc.id
              tempArr.push(data)
            })
          }
        }

        else if(catId&&priceMin&&priceMax){ // if category and price filters
          console.log('category and price filters')
          const next = categoryAndPriceQuery(9)
          const querySnapshot = await getDocs(next)
          querySnapshot.forEach((doc) => {
            const data = doc.data()
            data.id = doc.id
            tempArr.push(data)
          })
        }

        else if(catId&&orderFilter){
          // if category and sorted by price
          if(orderFilter==="asc-price"){
            // if sorting ascending
            const next = categoryQuerySortPriceAsc(9)
            const querySnapshot = await getDocs(next)
            querySnapshot.forEach((doc) => {
              const data = doc.data()
              data.id = doc.id
              tempArr.push(data)
            })
          }
          else if(orderFilter==="dec-price"){
            // if sorting decending
            const next = categoryQuerySortPriceDec(9)
            const querySnapshot = await getDocs(next)
            querySnapshot.forEach((doc) => {
              const data = doc.data()
              data.id = doc.id
              tempArr.push(data)
            })
          }
        }

        else if(priceMin&&priceMax&&orderFilter){
          // if filtering by price and sorting by price
          if(orderFilter==="asc-price"){
            // if sorting by ascending price
            const next = priceQuerySortPriceAsc(9)
            const querySnapshot = await getDocs(next)
            querySnapshot.forEach((doc) => {
              const data = doc.data()
              data.id = doc.id
              tempArr.push(data)
            })            
          }
          else if(orderFilter==="dec-price"){
            //if sorting by decending price
            const next = priceQuerySortPriceDec(9)
            const querySnapshot = await getDocs(next)
            querySnapshot.forEach((doc) => {
              const data = doc.data()
              data.id = doc.id
              tempArr.push(data)
            })   
          }
        }

        else if(priceMin&&priceMax){
          // if price filter
          const next = priceQuery(9)
          const querySnapshot = await getDocs(next)
          querySnapshot.forEach((doc) => {
            const data = doc.data()
            data.id = doc.id
            tempArr.push(data)
          })
        }

        else if(catId){
          // if category
          const next = categoryQuery(9)
          const querySnapshot = await getDocs(next)
          querySnapshot.forEach((doc) => {
            const data = doc.data()
            data.id = doc.id
            tempArr.push(data)
          })
        } 

        else if(orderFilter){
          // if no filter sort by price
          if(orderFilter==="asc-price"){
            // if sorting by ascending price
            const next = allProductsSortPriceAscQuery(9)
            const querySnapshot = await getDocs(next)
            querySnapshot.forEach((doc) => {
              const data = doc.data()
              data.id = doc.id
              tempArr.push(data)
            })
          }
          else if(orderFilter==="dec-price"){
            // if sorting by descending price
            const next = allProductsSortPriceDecQuery(9)
            const querySnapshot = await getDocs(next)
            querySnapshot.forEach((doc) => {
              const data = doc.data()
              data.id = doc.id
              tempArr.push(data)
            })
          }
        }

        else {
          // no filters and no sotring
          const next = allProductsQuery(9)
          const querySnapshot = await getDocs(next)
          querySnapshot.forEach((doc) => {
            const data = doc.data()
            data.id = doc.id
            tempArr.push(data)
          })
        }

      }

      return tempArr
  }

  async function getAllDocsInDbForPagination(catId, priceMin, priceMax){

    const catIdNum = catId?parseInt(catId):null
    const priceMinNum = priceMin?parseInt(priceMin):0
    const priceMaxNum = priceMax?parseInt(priceMax):2000
    let tempArr = []
    const productsRef = collection(db, "all-products")

    if(catId&&priceMin&&priceMax){ 
      // if category and price filters //condition 1
      const next = query(
        productsRef,
        where("category.id", "==", catIdNum), 
        where("price", ">=", priceMinNum), 
        where("price", "<=", priceMaxNum),
      )
      const querySnapshot = await getDocs(next)
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        data.id = doc.id
        tempArr.push(data)
      })
    }
    
    else if(priceMin&&priceMax){
      // if price filter // condition 2
      const next = query(
        productsRef, 
        where("price", ">=", priceMinNum), 
        where("price", "<=", priceMaxNum),
      )
      const querySnapshot = await getDocs(next)
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        data.id = doc.id
        tempArr.push(data)
      })
    }
    
    else if (catId){ 
      // if filter by category // condition 3
      const next = query(
        productsRef,
        where("category.id", "==", catIdNum), 
      )
      const querySnapshot = await getDocs(next)
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        data.id = doc.id
        tempArr.push(data)
      })
    }
    
    else {
      // no filters // condition 4
      const querySnapshot = await getDocs(productsRef)
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        data.id = doc.id
        tempArr.push(data)
      })
    }
    return tempArr
  }

  async function getAllDocsInDb(){
    
    let tempArr = []
    const productsRef = collection(db, "all-products")
    const querySnapshot = await getDocs(productsRef);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      data.id = doc.id;
      tempArr.push(data);
    })
    return tempArr
  }

  async function getSpecificDocInDb(id){
    const docRef = doc(db, "all-products", id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      console.log("No such document!");
    }
  }
    return(
      <fireBaseContext.Provider value={{
        getPageinatedDocsInDb, 
        getAllDocsInDb, 
        getAllDocsInDbForPagination, 
        getSpecificDocInDb, 
        createNewUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        auth,
        signInUsingGoogle,
        isUserSignedIn,
        userData,
        profileNameUpdate,
        signOutUser,
        count,
        setCount,
        userData,
        setUserData,
        isUserDisplayName,
        setIsUserDisplayName,
        userFireStoreData,
        addUserAddress,
        updateUserAddress,
        addUserPaymentInfo,
        updateUserPaymentInfo,
        addUserOrder,
        updateUserOrder
        }}>
      {children}
      </fireBaseContext.Provider>
    )
}
export { fireBaseContext }

 