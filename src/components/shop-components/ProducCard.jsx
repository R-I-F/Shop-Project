import React from "react"
import { Link, useLocation } from "react-router-dom"
import {AiFillHeart, AiOutlineShoppingCart} from "react-icons/ai"
import "../../styles/productCardStyles.css"

export default function ProductCard({item, offset, categoriesFilter, minPriceFilter, maxPriceFilter, priceArr, orderFilter, cartItems, setCartItems}){
    const [like, setLike] = React.useState(false)
    const [addCart, setAddCart] = React.useState(false)
    // state to control the display of the cart icon red/black
    const location = useLocation() 
    // location will be used to detect whether im at the shop page or the homepage
    const isItemExists = cartItems.filter((i)=>{return i.id === item.id}).length?true:false
    // checks cartitems array for the current item if it exists
    React.useEffect(()=>{
        // effect that sets the display of the cart icon red/black
        if(isItemExists){
            setAddCart(true)
        }
        else{
            setAddCart(false)
        }
    },[cartItems])

    function handleCart(){
        //if item alreadt exists in cart then remove it 
        if(isItemExists){
            setCartItems((prev)=>{return prev.filter((i)=>{return i.id !== item.id})})
        }
        //else if item doesnt exist in cart then add it to cart
        else if(!isItemExists){
            setCartItems((prev)=>{return[...prev, {...item, quantity:1}]})
        }
    }

    const linkContentEl = ()=>{
        return (
        <>
            <div className="product-card-img-container">
                <img 
                className="product-card-img"
                src={`/${item.images[0]}`}/>
            </div>
            <div className="product-card-description">                        
                <p>{item.description}</p>
            </div>
        </>
        )
    }

    const linkEl = ()=>{
        // function that produces the link element depending on the current location
        if(location.pathname==="/"){
            return (
            <Link 
            className="col-12 gy-2"
            to={`/shop/${item.id}`}
            state={{
                pathname:location.pathname
            }}
            >
            {linkContentEl()}
            </Link>
            )
        }
        else{
            return(
                <Link 
                className="col-12 gy-2"
                to={`./${item.id}`}
                state={{
                offset: offset,
                categoriesFilter: categoriesFilter,
                minPriceFilter: minPriceFilter,
                maxPriceFilter: maxPriceFilter,
                priceArr: priceArr,
                orderFilter: orderFilter, 
                pathname:location.pathname
                }}
                >
                {linkContentEl()}
                </Link>
            )
        }
    }


    return (
        <div className="product-card border pt-3 ">
            <div className="align-items-start gx-0"> 
                <div className="col-12 product-card-title px-2">
                    <p>{item.title}</p>
                </div>               
                {linkEl()}
                <div className="product-card-price col-12">
                    <div className="row">
                        <div className="col-9">
                            <p className="product-card-price-p1 ">EGP <span className="product-card-price-p2">{item.price}</span></p>
                        </div>
                        <div className="col-3">
                            <AiOutlineShoppingCart 
                            className="product-card-price-cart"
                            style = {addCart&&{fill:"red"}}
                            onClick = {()=>handleCart()}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}