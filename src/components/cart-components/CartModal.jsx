import React from "react";
import {AiOutlineShoppingCart} from "react-icons/ai"
import { FaAngleDoubleRight } from "react-icons/fa";
import "../../styles/cartModalStyles.css"
import { fireBaseContext } from "../../FireBase/FireBaseProvider";
import { Link } from "react-router-dom";

function CartModal({pageFilter, cartItems, setCartItems, isNavbarOn}){

    const [showModal, setShowModal] = React.useState(false)
    const [grandTotal, setGrandTotal] = React.useState()
    const isUserSignedIn = React.useContext(fireBaseContext).isUserSignedIn

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


    function handleShowModal(){
        setShowModal(true)
    }

    function handleHideModal(){
        setShowModal(false)
    }


    function clearCart(){
        setCartItems([])
    }

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
            pathname: location.pathname,
            pageFilter: pageFilter
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


    function handleClick(e){
        const itemId = e.target.parentElement.parentElement.parentElement.id
        if(e.target.id==="add-btn"){
            setCartItems((prev)=>{
                const tempArr = prev.map((item)=>{return item.id === itemId?{...item, quantity: item.quantity+1}:item})
                return tempArr
            })
        }

        else if(e.target.id==="subtract-btn"){
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
    const cartModalEl = (
        <>
            <div className="modal-close-btn-container">
                <span>Hide cart</span>
                <button 
                className="modal-close-btn mt-2"
                onClick={()=>handleHideModal()}>
                        <div className="svg-container">
                            <FaAngleDoubleRight className="svg-icon"/>
                        </div>
                </button>
            </div>
            {cartEl}
            {grandTotal&&grandTotalEl}
            {buyBtnEl()}
            {clearBtnEl()}
        </>
        )
    const cartModal = showModal?isNavbarOn?(
        <div className="cart-modal-navon">
            {cartModalEl}
        </div>
        ):(
        <div className="cart-modal-navoff">
            {cartModalEl}
        </div>
        ):null

    return(
        <div>
            <button 
            className="cart-modal-btn"
            onClick={()=>handleShowModal()}>
                <div className="svg-container">
                    <AiOutlineShoppingCart className="svg-icon"/>
                </div>
            </button>
            {cartModal}
        </div>
    )
}

export default CartModal