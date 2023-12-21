import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { fireBaseContext } from "../../FireBase/FireBaseProvider";
import "../../styles/orderPageStyles.css"
import { v4 as uuidv4 } from 'uuid' 
import Banner from '../Banner/Banner.jsx'

function Order({cartItems, setCartItems}){
    const location = useLocation() // cart items are stored in location.state
    const [grandTotal, setGrandTotal] = React.useState() 
    const pathName = location.pathname
    const shippingCost = 50
    const userFireStoreData = React.useContext(fireBaseContext).userFireStoreData
    const [isAddressAvailable, setIsAddressAvailable] = React.useState(false)
    const [selectedAddr, setSelectedAddr] = React.useState({})
    const [isPaymentMethodAvailable, setIsPaymentMethodAvailable] = React.useState(false)
    const [selectedPayment, setSelectedPayment] = React.useState({})
    const [bannerState, setBannerState] = React.useState()
    const addUserOrder = React.useContext(fireBaseContext).addUserOrder
    const updateUserOrder = React.useContext(fireBaseContext).updateUserOrder
    const navigate = useNavigate()
    const orderItems = cartItems?.map((item)=>{return{
        ...item,
        status:'pending',
        deliveryDate:{}
    }})
    
    const today = new Date()
    const year = today.getFullYear()
    const month = () => {
        const num = today.getMonth() + 1; // Adding 1 to get the correct month number    
        const monthMapping = {
          1: 'January',
          2: 'February',
          3: 'March',
          4: 'April',
          5: 'May',
          6: 'June',
          7: 'July',
          8: 'August',
          9: 'September',
          10: 'October',
          11: 'November',
          12: 'December',
        };
        return monthMapping[num];
      };
    
    const day = today.getDate()
    const orderDate = {day, month:month(), year}

    React.useEffect(()=>{ // checking if the fireStoreData containes a selected address and a payment method
        if(userFireStoreData){
            if(userFireStoreData.address.length){
                const tempAddr = userFireStoreData.address.filter((item)=>{return item.isSelected === true})
                const isAddrSelected = tempAddr?(true):false
                setSelectedAddr(tempAddr[0])
                setIsAddressAvailable(isAddrSelected)
            }
            if(userFireStoreData.paymentInfo.length){
                const tempPayment = userFireStoreData.paymentInfo.filter((item)=>{return item.isSelected === true})
                const isPaymentMethodSelected = tempPayment?true:false
                setSelectedPayment(tempPayment[0])
                setIsPaymentMethodAvailable(isPaymentMethodSelected)
            }
        }
    },[userFireStoreData])

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
    
    function hideCardNumber(cardNum){
        let hiddenCardNumber = ""
        for(let i=0; i<cardNum?.length; i++){
            if(i<3 || i>=12){
                hiddenCardNumber+=`${cardNum[i]}`
            }
            else if(i===3){
                hiddenCardNumber+=`${cardNum[i]} `
            }
            else if(i===7 || i===11){
                hiddenCardNumber+=`X `
            }
            
            else {
                hiddenCardNumber+=`X`
            }
        }
        return hiddenCardNumber
    }
    
    function formatNumbers(num){
        return num?.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    }

    const bannerEl = (bannerState, status, title, text)=>{
        if(bannerState){
            return <Banner status={status} title={title} text={text}/>
        }
    }
    
    function handleClick(){
        /* 
        1.check if payment and addr are added and selected 
        2. push userfirestoredata orders array with {
            cartItems,
            selectedAddr,
            paymentMethod,
            status:pending    
        }
        3. clear cartItems from local storage
        4. send user to order status page
        */
       if(isAddressAvailable&&isPaymentMethodAvailable){
           const tempObj={
                items:orderItems,
                totalPrice:grandTotal, 
                address: selectedAddr, 
                paymentInfo: selectedPayment, 
                orderDate,
                orderId:uuidv4(), 
                userName: userFireStoreData.displayName,
                review:''
                }
           addUserOrder(tempObj)
           setCartItems([])
           navigate('/account/orders')
       }
       else{
        setBannerState(true)
        setTimeout(()=>setBannerState(false), 3000)
       }
    }

    
    function isEmptyObject(obj) {
        return Object.keys(obj).length === 0;
      }

    const addrEl = userFireStoreData && !isEmptyObject(selectedAddr)?(
        <div>
            <p>{userFireStoreData?.displayName} {selectedAddr.buildingNo} {selectedAddr.street} {selectedAddr.city} {selectedAddr.country?.value} {selectedAddr.postalCode} {selectedAddr.phone}</p>
        </div>)
        :(<div>
            <p>Please add your address</p>
        </div>)

    const paymentEl = userFireStoreData && !isEmptyObject(selectedPayment)?(
        <div>
            <p>{selectedPayment.nameOnCard}<br/>{hideCardNumber(selectedPayment.cardNum)}<br/>{selectedPayment.expMonth}/{selectedPayment.expYear}</p>
        </div>
    ):(<div>
        <p>Please add your payment method</p>
    </div>)
    
    const cartItemsEl = cartItems.map((item, index)=>(
        <div className="row" key={`${index}`}>
            <p className="col-1">{index+1}</p>
            <p className="col-6">{item.title}</p>
            <p className="col-1">{item.quantity}</p>
            <p className="col-4 text-end">EGP {item.price}</p>
        </div>))
    return (
        <div className="order-section">            
            <div className="row mx-2 mx-sm-5 mt-4">
                <div className="col-12"><h4>{`Checkout (${cartItems.length} ${cartItems.length>1?`items`:`item`})`}</h4></div>
                <div className="col-12 line"></div>
                <div className="col-12 col-lg-8">
                    <div className="row order-info">
                            
                            <div className="col-1"><p>1</p></div>
                            <div className="col-4">Shipping address</div>
                            <div className="col-5">{addrEl}</div>
                            <div className="col-2">
                                <Link
                                to='/account/addresses'
                                state={{cartItems, grandTotal, pathName}}
                                className="order-link"
                                >{!isEmptyObject(selectedAddr)?'Change':'Add'}</Link></div>

                            <div className="col-1"><p>2</p></div>
                            <div className="col-4">Payment Method</div>
                            <div className="col-5">{paymentEl}</div>
                            <div className="col-2">
                            <Link
                                to='/account/payment'
                                state={{cartItems, grandTotal, pathName}}
                                className="order-link"
                                >{!isEmptyObject(selectedPayment)?'Change':'Add'}</Link>
                            </div>
                            <div className="col">
                                {bannerEl(bannerState, "error", "there is missing information", "please set you're address and payment information")}
                            </div>

                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div className="row order-summary">
                        <h5 className="col-12">Order Summary</h5>
                        <p className="col-8 mb-1">Items:</p><p className="col-4 mb-1 text-end">EGP {formatNumbers(grandTotal)}</p>
                        <div className="col-12 mb-1 line"></div>
                        <div className="col-12">                            
                            <div className="row">
                                <p className="col-1"></p>
                                <p className="col-6">Name</p>
                                <p className="col-1">Qty</p>
                                <p className="col-4 text-end">price</p>
                        </div>
                        </div>
                        <div className="col-12 mb-1">{cartItemsEl}</div>
                        <div className="col-12 mb-1 line"></div>
                        <p className="col-8 mb-1 ">Shipping and handeling:</p><p className="col-4 mb-1 text-end">EGP {formatNumbers(shippingCost)}</p>
                        <div className="col-12 line"></div>
                        <h5 className="col-6 mt-2">Total:</h5><h5 className="col-6 mt-2 text-end">EGP {formatNumbers(grandTotal + shippingCost)}</h5>
                    </div>
                </div>
                <div className="col-3 mt-4">                
                    <button className="submit-btn px-3 py-1" onClick={()=>handleClick()}>Place Order</button>
                </div>
            </div>
        </div>
    )
}
export default Order