import React from "react"
import ProductCard from "../components/shop-components/ProducCard.jsx"
import Pagination from "../components/shop-components/Pagination";
import CartModal from "../components/cart-components/CartModal.jsx";
import { useSearchParams, Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import ReactLoading from "react-loading"
import CategoriesContext from "../components/CategoriesContext";
import ShopFilters from "../components/shop-components/ShopFilters";
import Banner from "../components/Banner/Banner.jsx"
import { fireBaseContext } from "../FireBase/FireBaseProvider.jsx";

export default function Shop ({cartItems, setCartItems, isCatDropDown, setIsCatDropDown}){
    
  const [loading, setLoading] = React.useState(false)
  const [products, setProducts] = React.useState([]) // products array that are displayed on the page
  
  const [categoriesId, setCategoriesId] = React.useState("")
  const [searchParams, setSearchParams] = useSearchParams()
  const [productsDataLength, setproductsDataLength] = React.useState([])

  const [priceFilter, setPriceFilter] = React.useState("") // controls price filter radio
  const [order, setOrder] = React.useState([])  // controls orderby radio 
  const [priceArr, setPriceArr] = React.useState([]) // controls price search parameter
  
  
  const [showFilters, setShowFilters] = React.useState(false) //ui show filter state
  const [isSmallScreen, setIsSmallScreen] = React.useState(false) //ui responsive small screen state
  
  const location = useLocation()
  const navigate = useNavigate()
  const getPageinatedDocsInDb = React.useContext(fireBaseContext).getPageinatedDocsInDb
  const getAllDocsInDbForPagination = React.useContext(fireBaseContext).getAllDocsInDbForPagination
  
  const pageFilter = searchParams.get("page")
  const categoriesFilter = searchParams.get("category")? searchParams.get("category"):""
  const minPriceFilter = searchParams.get("price_min")?searchParams.get("price_min"):""
  const maxPriceFilter = searchParams.get("price_max")?searchParams.get("price_max"):""
  const orderFilter = searchParams.get("order")?searchParams.get("order"):null
  const offset = (pageFilter - 1)*9

    
  React.useEffect(()=>{
    setLoading(true)
    getPageinatedDocsInDb(offset, categoriesFilter, minPriceFilter, maxPriceFilter, orderFilter).then(res=>{
      setProducts(res)
      setLoading(false)
    }) 
    getAllDocsInDbForPagination(categoriesFilter, minPriceFilter, maxPriceFilter).then((res)=>{
      let tempArr= []
      for(let i=0; i<res.length/9; i++){
        tempArr.push(i+1)
      }
      setproductsDataLength(tempArr)
    })
    setIsCatDropDown(false)
  },[offset,searchParams])

  React.useEffect(()=>{
    priceFilter === "0To500"?setPriceArr([1,500]):
    priceFilter === "500To1000"?setPriceArr([500,1000]):
    priceFilter==="1000To1500"?setPriceArr([1000,1500]):
    priceFilter==="1500To2000"?setPriceArr([1500,2000]):
    location.state?.priceArr?setPriceArr(location.state.priceArr):
    setPriceArr(prev=>prev)
  },[priceFilter])

  React.useEffect(()=>{
    const handleResize = ()=>{
      setIsSmallScreen(window.innerWidth<=1250)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return ()=>{window.removeEventListener("resize", handleResize)}
  },[])

  React.useEffect(() => {
    if (!products.length) {
      const navigateToShopPage = () => {
        setTimeout(() => navigate('/shop?page=1'), 3000);
      };

      navigateToShopPage(); // Call the function
      clearAllFilters()
    }
  }, [products]);

  function handleSubmitBtn(event){
    event.preventDefault()
    setShowFilters(false)

    if(categoriesId&&priceFilter&&order){
      console.log('condition 1')
      setSearchParams({
        page:"1", 
        category: categoriesId,
        price_min: priceArr[0],
        price_max: priceArr[1],
        order: order
      })
    }

    else if(categoriesId&&priceFilter){
      setSearchParams({
        page:"1", 
        category: categoriesId,
        price_min: priceArr[0],
        price_max: priceArr[1]
      })
    }

    else if(order&&priceFilter){
      setSearchParams({
        page:"1", 
        order: order,
        price_min: priceArr[0],
        price_max: priceArr[1]
      })
    }

    else if(categoriesId&&order){
      setSearchParams({
        page:"1", 
        category: categoriesId,
        order: order
      })
    }

    else if(categoriesId){
      setSearchParams({
        page:"1", 
        category: categoriesId,
      })
      setPriceArr([])
      setOrder([])
    }

    else if(priceFilter){
      setSearchParams({
        page:"1", 
        price_min: priceArr[0],
        price_max: priceArr[1]
      })
      setCategoriesId([])
      setOrder([])
    }

    else if(order){
      setSearchParams({
        page:"1", 
        order: order
      })
      setPriceArr([])
      setCategoriesId([])
    }
    else setSearchParams({page:"1"})
  }

 function clearAllFilters(){
   setCategoriesId("")
   setPriceFilter("")
   setOrder("")
 }  

  const productCardsEl = ()=>{
    if(!loading){
      if(products.length){
        return(
          products.map((item)=>{
            return( 
                <div 
                className="col-xs-12 col-sm-6 col-md-4 col-lg-4 gy-2"
                key = {item.id}> 
                      <ProductCard
                      item = {item}  
                      offset={offset}     
                      categoriesFilter={categoriesFilter}
                      minPriceFilter={minPriceFilter}
                      maxPriceFilter={maxPriceFilter}
                      priceArr={priceArr}
                      orderFilter = {orderFilter}
                      />
                </div>                   
            ) 
          })        
        )
      }
      else if(!products.length){
        return (
          <Banner 
          status ="error" 
          title="We couldn't find any results matching your criteria" 
          text="We will send you back to the shop page!" 
        />
        )
      }
    }
    else {
      return (
      <div className='col-12'>        
        <ReactLoading 
          type="spin" 
          color="#141414"
          className="loading-icon"
          width={"15%"}
          height={"15%"}/>
      </div>
    )}
  }

  const screenSizeClass = ()=>{
    if(loading){
      return 'col-12 shop-page'
    }
    else if(!loading){
      if(!isSmallScreen){ // if wide screens
        console.log('not loading and wide screen')
        return 'col-10 shop-page'
      }
      else if(isSmallScreen){
        return 'col-12 shop-page'
      }
    }
  }
        
  return (
    <div className="shop-section-container">
      <div className="row  shop-section">
        <CartModal
          cartItems = {cartItems} 
          setCartItems = {setCartItems}
          /> 
        <CategoriesContext>
          <ShopFilters
          categoriesId = {categoriesId}
          setCategoriesId={setCategoriesId}
          priceFilter = {priceFilter}
          setPriceFilter = {setPriceFilter}
          handleSubmitBtn={handleSubmitBtn}
          order = {order}
          setOrder = {setOrder}
          loading = {loading}
          isSmallScreen = {isSmallScreen}
          showFilters = {showFilters}
          setShowFilters = {setShowFilters}
          /> 
        </CategoriesContext>      
        <div className={screenSizeClass()}>
          <div 
          className="products row gx-3"
          >{productCardsEl()}</div>

          <Pagination 
          pageFilter={pageFilter}
          categoriesFilter = {categoriesFilter}
          priceFilter = {priceFilter}
          setPriceFilter = {setPriceFilter}
          priceArr = {priceArr}
          setPriceArr = {setPriceArr}
          setSearchParams={setSearchParams}
          productsDataLength={productsDataLength}
          offset = {offset}
          orderFilter={orderFilter}
          products={products}/>
        </div>
      </div>
    </div>
  )
}



