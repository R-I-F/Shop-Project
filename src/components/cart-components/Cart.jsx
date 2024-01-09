import React from "react";
import { useParams, Link, useLocation } from "react-router-dom"
import { fireBaseContext } from "../../FireBase/FireBaseProvider";

import "../../styles/cartStyles.css"


function Cart({cartItems, setCartItems, product, setProduct, setIsCartItemsCleared}){

    const isUserSignedIn = React.useContext(fireBaseContext).isUserSignedIn
    const [grandTotal, setGrandTotal] = React.useState()
    const location = useLocation()
    

    React.useEffect(()=>{ // calculate grandtotal value
        if(cartItems?.length){
            let tempTotal = 0
            for(let i=0; i<cartItems.length; i++){
                tempTotal+= cartItems[i].quantity*cartItems[i].price
            }
            setGrandTotal(tempTotal)
        }
        else  
        setGrandTotal(null)       
    },[cartItems])

    const params = useParams()

    function handleClick(e){
        const itemId = e.target.parentElement.parentElement.parentElement.id
        const isProductPage = itemId === params.id
        if(e.target.id==="add-btn"){
            if(isProductPage){
                setProduct((prev)=>{return {
                    ...prev,
                    quantity: prev.quantity+1
                }})
            }
            else{
                setCartItems((prev)=>{
                    const tempArr = prev.map((item)=>{return item.id === itemId?{...item, quantity: item.quantity+1}:item})
                    return tempArr
                })
            }
        }

        else if(e.target.id==="subtract-btn"){
            if(isProductPage){
                setProduct((prev)=>{
                    const tempObj = prev.quantity>1?
                    {...prev, quantity: prev.quantity-1}:{...prev, quantity:0}
                    return tempObj
                })
                setCartItems((prev)=>{
                    const tempArr = prev.map((item)=>{
                        return item.id === itemId?
                        item.quantity>1?
                        {...item, quantity: item.quantity-1}:
                        null:item
                    }).filter(value => value !== null)
                    return tempArr
                })
            }
            else{
                setCartItems((prev)=>{
                    const tempArr = prev.map((item)=>{
                        return item.id === itemId?
                        item.quantity>1?
                        {...item, quantity: item.quantity-1}:
                        null:item
                    }).filter(value => value !== null)
                    return tempArr
                })
            }
        }
    }

    function clearCart(){
        setCartItems([])
        setIsCartItemsCleared(true)
    }

    const cartEl = cartItems?.length?cartItems.map((item)=>{
        return(
            <div
            id={item.id}
            key={item.id}
            className="row m-2 align-items-center cart-item">
                <div className="col-2 align-self-start img-container">                    
                    <img
                    src={`/${item.images[0]}`}
                    className="item-cart-image"/>
                </div>
                <div className="col-5">
                    <p
                    className="item-cart-title">{item.title}</p>
                </div>
                <div className="col-2 qty-container">  
                    <div className="qty">
                        <button
                        className="qty-container-btn"
                        id="add-btn"
                        onClick={()=>handleClick(event)}
                        >+</button>
                        <button
                        className="qty-container-btn"
                        id="subtract-btn"
                        onClick={()=>handleClick(event)}
                        >-</button>
                    </div>          
                </div>
                <div className="col-3">                    
                <p className="qty-value">Qty:{item.quantity}</p>
                <p className="item-cart-price">Total: {item.price*item.quantity}</p>
                </div>
            </div>
        )
    }):null

    const grandTotalEl = <div className="grand-total">
        <div className="line-break m-2"></div>
        <p className="cart-text m-2">GrandTotal: {grandTotal} EGP</p>
    </div>

    const buyLinkBtnEl = isUserSignedIn?(
    <Link 
    className="buy-btn-link"
    to='/order'
    state={{cartItems, grandTotal}}
    >
        Buy Now
    </Link>):(
    <Link 
    className="buy-btn-link"
    to='/login'
    state={{
        pathname:location.pathname
        }}>
    Buy Now
    </Link>)

    const buyBtnEl = ()=>{
        if(!cartItems.length){
            return(
                <button
                disabled={true}
                className="submit-btn-disabled mt-2 mx-5">
                    Buy Now
                </button>
            )
        }
        else {
            return(
                <button
                className="info-btn mt-2 mx-5">
                    {buyLinkBtnEl}
                </button>
            )
        }
    }

    const clearBtnEl= ()=>{
        if(!cartItems.length){
            return(
            <button
            disabled={true}
            className="submit-btn-disabled mt-2 mx-5"
            onClick={()=>clearCart()}
            >Clear Cart</button>
            )
        }
        else {
            return(
            <button
            className="info-btn mt-2 mx-5"
            onClick={()=>clearCart()}
            >Clear Cart</button>                
            )
        }
    }

    return (
        <div className="cart col-xl-3 col-md-4 col-12 ">
            {cartEl}
            {grandTotal&&grandTotalEl}
            {buyBtnEl()}
            {clearBtnEl()}
        </div>
    )

}
export { Cart }