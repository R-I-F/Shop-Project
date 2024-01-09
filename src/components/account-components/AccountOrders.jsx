import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { fireBaseContext } from "../../FireBase/FireBaseProvider";

function AccountOrders(){
    const userFireStoreData = React.useContext(fireBaseContext).userFireStoreData
    const location = useLocation()
    const ordersArr = userFireStoreData?.orders
    const navigate = useNavigate()
    /* 
    create ordersEl, this element is a card for each order which includes:
    orderDate, totalPrice, userName, orderId, orderItems, 
    buttons: 
    buyAgain -> sends to single product page, so i need the itemId 
    writeReview -> write a review that gets displayed on the single product page

    */

    function formatNumbers(num){
        return num?.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    }

    function handleBuyClick(id){
        navigate(`/shop/${id}`,{state:{pathname:location.pathname}})
    }

    function handleReviewClick(){
        console.log('this section to be continued')
    }

    const statusEl = (str, deliveryDate)=>{
        const {day, month, year} = deliveryDate
        if(str === "pending"){
            return "Pending delivery"
        }
        else if(str === "delivered"){
            return `Delivered ${day} ${month} ${year}`
        }
    } 

    const reviewBtnEl = (str)=>{
        if(str === "pending"){
            return (<button 
                className="submit-btn-disabled ms-sm-auto me-sm-0 me-auto" 
                disabled={true}
                onClick={()=>handleReviewClick()} 
                >Write a review</button>)
        }
        else if(str === "delivered"){
            return (<button 
                className="submit-btn ms-sm-auto me-sm-0 me-auto" 
                disabled={false} 
                onClick={()=>handleReviewClick()} 
                >Write a review</button>)
        }
    }


    const orderEl = ()=>{
        if(ordersArr){
            return ordersArr.map((item)=>{
                const{address, items, orderDate, orderId, paymentInfo, review, totalPrice, userName} = item
                return(
                    <div key={orderId} className="acc-order">
                        <div className="acc-order-header p-3 d-flex">                            
                            <div className="row">
                                <p className="col-6">ORDER PLACED</p>
                                <p className="col-3">TOTAL</p>
                                <p className="col-3">SHIP TO</p>
                                <p className="col-6">{`${orderDate.day} ${orderDate.month} ${orderDate.year}`}</p>
                                <p className="col-3">EGP {formatNumbers(totalPrice)}</p>
                                <p className="col-3">{userName}</p>                                
                            </div> 
                            <p className="ms-2 acc-order-id">ORDER #{item.orderId}</p>                       
                        </div>
                        {items.map((cartItem)=>{
                            const {deliveryDate, description, id, images, price, quantity, status, title} = cartItem
                            return(
                                <div key={id} className="acc-order-body p-3">
                                    <div className="row gy-sm-0 gy-2 ">
                                        <h5 className="col-12">{statusEl(status, deliveryDate)}</h5>
                                        <div className="col-md-2 col-sm-3 col-12">                                    
                                            <img className="acc-order-img" src={"/"+images[0]}/>
                                        </div>
                                        <div className="col-sm-6 col-12 d-flex flex-column justify-content-between">
                                            <h6>{title}</h6>
                                            <p className="">{description}</p>
                                            <button 
                                            className="submit-btn align-self-start" 
                                            onClick={()=>handleBuyClick(id)}
                                            >Buy it again</button>
                                        </div>
                                        <div className="col-md-4 col-sm-3 col-12">
                                        {reviewBtnEl(status)}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="acc-order-footer">
                        </div> 
                    </div>
                )
            })
        }
    }
    return(
        <div className="acc-order-page ">
        <div className="mt-5 mx-sm-5 mx-3">
            <h3 className="">Your Orders</h3>
            {orderEl()}
        </div>
        </div>
    )
}

export default AccountOrders