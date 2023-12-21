import React from "react";
import { useLocation, Link } from 'react-router-dom'
import { fireBaseContext } from "../../FireBase/FireBaseProvider";
import MonthDropDown from "./MonthDropDown";
import YearDropDown from "./YearDropDown";
import { FaPlus, FaRegCreditCard } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

function AccountPayment(){
    const [error, setError] = React.useState(false)
    const [modalState, setModalState] = React.useState(false)
    const [paymentInfoArr, setPaymentInfoArr] = React.useState([])
    const [paymentForm, setPaymentForm] = React.useState({
        cardNum:"",
        nameOnCard:"",
        expMonth:"",
        expYear:"",
        isSelected:false
    })
    
    const addUserPaymentInfo = React.useContext(fireBaseContext).addUserPaymentInfo
    const updateUserPaymentInfo = React.useContext(fireBaseContext).updateUserPaymentInfo
    const userFireStoreData = React.useContext(fireBaseContext).userFireStoreData

    const location = useLocation()
    const isStatePathnameOrder = location.state?.pathName === '/order'?true:false
    const cartItems = location.state?.cartItems
    const grandTotal = location.state?.grandTotal

    React.useEffect(()=>{
        const tempArr = userFireStoreData?.paymentInfo
        const tempObj = userFireStoreData?.paymentInfo[0]
        if(tempArr?.length === 1 && tempObj.isSelected === false){
                updateUserPaymentInfo([{...tempObj, isSelected:true}])
        }
        else {
            setPaymentInfoArr(tempArr)
        }
    },[userFireStoreData])

    function handleChange(e){
        if(e.target.id ==="cardNumInputEl"){
            setPaymentForm((prev)=>{
                return{
                    ...prev,
                    cardNum: e.target.value
                }
            })
        }
        else if(e.target.id ==="cardNameInputEl"){
            setPaymentForm((prev)=>{
                return{
                    ...prev,
                    nameOnCard: e.target.value
                }
            })
        }
    }

    function handleRadioChange(e,i){
        if (e.target.id === "isCardSelected"){
            const tempArr = userFireStoreData?.paymentInfo.map((item, index)=>{
                if(index === i){
                    return {
                        ...item,
                        isSelected:true
                    }
                }
                else return{
                        ...item,
                        isSelected:false
                }
            })
            updateUserPaymentInfo(tempArr)
        }
    }

    function toggleModalState(){
        setModalState((prev)=>{
            return !prev
        })
    }
    
    function handleClick(e){
        e.preventDefault()
        if(areAllFieldsFilled(paymentForm)){
            addUserPaymentInfo(paymentForm)
            setError(false)
            clearPaymentForm()
            toggleModalState()
        }
        else setError(true)
    }

    function clearPaymentForm(){
        setPaymentForm({
            cardNum:"",
            nameOnCard:"",
            expMonth:"",
            expYear:"",
            isSelected: false
        })
    }
    
    function areAllFieldsFilled(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                
                if (obj[key] === "" || obj[key] === null || obj[key] === undefined) {
                    return false;
                }
            }
        }
        return true;
    }
    
    const creditListEl = paymentInfoArr?.length&&paymentInfoArr.map((item, index)=>{
        const {cardNum, nameOnCard, expMonth, expYear, isSelected} = item
        let hiddenCardNumber = ""
        for(let i=0; i<cardNum.length; i++){
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
        return(
            <div
            key={index}
            className="col-12">
                <div className="row mb-2">                   
                    <div className="col-1 d-flex justify-content-end">
                        <input
                        className="" 
                        type="radio"
                        checked={isSelected}
                        id="isCardSelected"
                        onChange={(event)=>handleRadioChange(event, index)}/>
                    </div>

                    <div className="col-4 ">
                        <p>{hiddenCardNumber}</p>
                    </div> 

                    <div className="col-4 ">
                        <p>{nameOnCard}</p>
                    </div>

                    <div className="col-2 ps-0 ps-sm-2 ">
                        <p>{expMonth}/{expYear}</p>
                    </div>       
                </div>

            </div>
        )
    })

    const labelClassName = "col-12 col-sm-5"
    const inputClassName = "col-12 col-sm-7"

    return(
        <>
        {isStatePathnameOrder?<Link 
            to='/order'
            className='col-12 back-link'
            state={{cartItems, grandTotal}}
            >Back to Order</Link>:null}
            <div className="payment-list mt-5 mx-3 mx-lg-auto">
                <div className="payment-list-header"> 
                    <h5>Choose a payment method</h5>
                    <div className="row"> 
                        <div className="col-12">
                            <h5>You're credit and debit cards</h5>
                        </div>

                        <div className="col-5 ">
                            <p></p>
                        </div>

                        <div className="col-4 ">
                            <p>Name on Card</p>
                        </div>

                        <div className="col-2 ps-0 ps-sm-2">
                            <p>Expires on</p>
                        </div>  

                        <div className="col-12">
                            <div className="line"></div>
                        </div>
                    </div>
                </div>

                {paymentInfoArr?.length?<div className="row pt-2">
                    {creditListEl}
                </div>:null}

                <div className="payment-list-footer">
                    <div className="row py-1">
                        <div className="col-3 col-sm-2 add-card-container">
                            <button 
                            className="add-card-btn"
                            onClick={()=>{toggleModalState()}}
                            ><FaPlus/>
                            </button>
                            <div className="card-icon">
                                <FaRegCreditCard/>
                            </div>
                        </div>
                        <div className="col-9 col-sm-10 popup-anchor">
                            <p className="mb-0">
                                <span
                                onClick={()=>{toggleModalState()}}
                                >{`Add a Credit / Debit card`}</span> MyShop.eg accepts all major credit cards</p>
                        </div>
                    </div>



                </div>
            </div>
            <div 
            className="custom-modal-container"
            style={modalState?{display:"flex"}:null}
            >
                <div className="row custom-modal">
                    <div className="col-10 mb-2 modal-title">
                        <p className="mb-0">MyShop accepts all major credit and debit cards</p>
                    </div>
                    <div className="col-2 mb-2 text-end">
                    <button 
                    className="close-btn"
                    onClick={()=>{toggleModalState()}}
                    >
                        <IoCloseOutline/>
                    </button>
                    </div>
                    <div className="col-12 col-sm-8"> 
                            <form className="row gy-3"> 
                                <div>
                                    <label htmlFor="cardNumInputEl" className={labelClassName}>Card Number</label>
                                    <input 
                                    type="text" 
                                    className={inputClassName}
                                    id="cardNumInputEl" 
                                    name="card-detail-form"
                                    value={paymentForm.cardNum}
                                    onChange={(event)=>handleChange(event)} 
                                    />
                                </div>  

                                <div>
                                    <label htmlFor="cardNameInputEl"className={labelClassName}>Name on Card</label>
                                    <input 
                                    type="text" 
                                    className={inputClassName}
                                    id="cardNameInputEl" 
                                    name="card-detail-form"
                                    value={paymentForm.nameOnCard}
                                    onChange={(event)=>handleChange(event)} 
                                    />
                                </div>

                                <div>
                                    <label htmlFor="" className={labelClassName}>Expiration Date</label>

                                    <MonthDropDown
                                    paymentForm={paymentForm}
                                    setPaymentForm={setPaymentForm}/>

                                    <YearDropDown
                                    paymentForm={paymentForm}
                                    setPaymentForm={setPaymentForm}/>
                                </div>
                            </form>               
                    </div>
                    <div className="line col-12 my-3"></div>
                    <div>
                        <button
                        className="submit-btn"
                        onClick={(event)=>handleClick(event)}
                        >Submit</button>
                    </div>
                </div>    
            </div>
        </>
    )
}

export default AccountPayment