import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { fireBaseContext } from "../../FireBase/FireBaseProvider";

function AddressCard(){
    const [addressArr, setAddressArr] = React.useState([])
    const updateUserAddress = React.useContext(fireBaseContext).updateUserAddress
    const userFireStoreData = React.useContext(fireBaseContext).userFireStoreData

    React.useEffect(()=>{
        if(userFireStoreData?.address.length === 1 && userFireStoreData?.address[0].isSelected === false){
            const addrObj = userFireStoreData.address[0]
            const tempAddr = {...addrObj, isSelected:true}
            updateUserAddress([tempAddr])
        }
        else setAddressArr(userFireStoreData?.address)
    },[userFireStoreData])


    function handlePickAddress(e){
            const tempArr = addressArr.map((item, index)=>{
                if(index === +e.id){
                    return {
                        ...item,
                        isSelected: true
                    }
                }
                else {
                    return{
                        ...item,
                        isSelected: false
                    }
                }
            })
        updateUserAddress(tempArr)
    }
    
    function handleDeleteAddr(e){
        e.stopPropagation()
        const buttonElement = e.currentTarget;
        const tempArr = addressArr.map((item, index)=>{
            if(buttonElement.name !== index.toString()){
                return item
            }
        }).filter( Boolean )
        updateUserAddress(tempArr)
    }

    const selectedAddrStyle = {
        boxShadow: "0 0 10px 2px #232323",
        background: "#eaeaea"
    }

    const addressArrEl = addressArr?.map((item, index)=>{
        return(
            <div className="row" key={index}>                
                <div className="col-12"> 
                    <div className="row justify-content-center">
                        <div 
                        className="col-lg-7 col-md-6 col-7 p-3 mt-2 address-card"
                        style={item.isSelected?selectedAddrStyle:null}
                        id = {index}
                        onClick={(event)=>{
                            event.stopPropagation()
                            const isDeleteButton = event.target.id === "delete-btn" || event.target.parentElement?.id === "delete-btn";
                            if(!isDeleteButton){
                                handlePickAddress(event.currentTarget);
                            }
                        }}
                        >
                            <p>
                                <strong>{userFireStoreData.displayName}</strong>, {item.buildingNo} 
                                <span> {item.street}</span>, {item.city} {item.postalCode}</p>
                                <div className="row justifiy-content-center align-items-center"> 
                                    <div className="col-9">
                                        <p className="mb-0">{item.phone}</p>
                                    </div>                       
                                    <div className="col-3 align">
                                        <button 
                                        className="delete-btn py-2 ms-auto"
                                        id="delete-btn"
                                        name={index}
                                        onClick={(event)=>handleDeleteAddr(event)}
                                        ><FaRegTrashAlt className="trash-icon"/>
                                        </button>
                                    </div>
                                </div>
                        </div>
                    </div>               
                </div>
            </div>
        )
    })
    return (
        <>
            {addressArrEl}
        </>
        )
}
export default AddressCard