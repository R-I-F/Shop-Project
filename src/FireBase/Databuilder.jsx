import React from "react";
import { allProducts } from "./productsDb";
import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    collection, 
    addDoc,
    doc, 
    getDocs,
    query,
    limit,
    orderBy,
    startAfter,
    where,
    startAt
  } from "firebase/firestore";

export default function DataBuilder(){
    const firebaseConfig = {
        apiKey: "AIzaSyAzPEh_tl-SY0Sql4i5s5P-QNGZdyMbNBc",
        authDomain: "online-shop-new.firebaseapp.com",
        projectId: "online-shop-new",
        storageBucket: "online-shop-new.appspot.com",
      };
      
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);

    async function createDoc(i){
      console.log('creating')
      const item = allProducts[i]
      try {
        const docRef = await addDoc(collection(db, "all-products"), {
          title: item.title,
          price: item.price,
          description: item.description,
          rating: item.rating,
          category:item.category,
          images: item.images,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    React.useEffect(()=>{
      for (let i=0 ; i<allProducts.length ; i++){
        createDoc(i)
      }
    },[])
}