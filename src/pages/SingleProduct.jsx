import React from "react";
import { useParams, useLocation, useSearchParams, Link, NavLink } from "react-router-dom"
import ReactLoading from "react-loading"
import ProductImgs from "../components/shop-components/ProductImgs";
import ProductInfo from "../components/shop-components/ProductInfo";
import { Cart } from "../components/cart-components/Cart.jsx";
import "../styles/singleProductStyles.css"
import { fireBaseContext } from "../FireBase/FireBaseProvider";


function SingleProduct({cartItems, setCartItems}){

    const [product, setProduct] = React.useState()
    const [isCartItemsCleared, setIsCartItemsCleared] = React.useState(false)

    const params = useParams()

    const location = useLocation()

    const getSpecificDocInDb = React.useContext(fireBaseContext).getSpecificDocInDb
    

    React.useEffect(()=>{ // either initialize product from DB or retreive from cart if it exists their. 
        if(cartItems.filter((item)=>{return item.id === params.id}).length){// retrieve from cart
            setProduct(()=>{
                let tempArr = cartItems.filter((item)=>{return item.id === params.id})
                return tempArr[0]
            })
        }
        else{ // initialize from database
            getSpecificDocInDb(params.id)
            .then((res)=>{setProduct({
                ...res,
                quantity:0,
                id:params.id
                })})
        }
    },[params.id, isCartItemsCleared])

    React.useEffect(()=>{ // this effect adds the current product to cartItems array state
        const productExistsInCart = cartItems.filter((item)=>{return item.id === params.id}).length?true:false
        if(product?.quantity>0){
            if(!productExistsInCart){
                setCartItems((prev) => [...prev, product]);    
            }
            else if(productExistsInCart){
                setCartItems((prev)=>{
                    const newCartItems = prev.map((item)=>{return item.id === params.id?{...product}:item})
                    return newCartItems
                })
            }
        }
    },[product])

    React.useEffect(()=>{ // toggles the isCartItemsCleared State
        if(cartItems?.length>0){setIsCartItemsCleared(false)}
    },[cartItems])

    function handleAddCart(){
        const updatedProduct = {
            ...product,
            quantity: product.quantity + 1
          }
        setProduct(updatedProduct)
    }

    return product?(
        <div className="single-product-page-container">
            
            <div className="single-product-page row">

                <ProductImgs
                imgArr = {product.images}/>

                <ProductInfo
                title={product.title}
                // brand={product.category.name}
                description={product.description}
                price={product.price}
                location = {location.state}
                handleAddCart={handleAddCart}/>
                
                <Cart
                cartItems = {cartItems} 
                setCartItems={setCartItems}
                product = {product}
                setProduct = {setProduct}
                setIsCartItemsCleared={setIsCartItemsCleared}/>
            </div>         
        </div>
    ):<ReactLoading 
    type="spin" 
    color="#141414"
    className="loading-icon"
    width={"15%"}
    height={"15%"}/>
}

export { SingleProduct }
