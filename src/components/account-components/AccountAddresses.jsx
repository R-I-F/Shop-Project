import React from "react";
import AddressForm from "./AddressForm";
import AddressCard from "./AddressCard";
import "../../styles/accountStyles.css"
import { useLocation, Link} from 'react-router-dom'


function AccountAddresses(){

    const location = useLocation()
    const isStatePathnameOrder = location.state?.pathName === '/order'?true:false
    const cartItems = location.state?.cartItems
    const grandTotal = location.state?.grandTotal
    
    return (
        <div className="row">
            {isStatePathnameOrder?<Link 
            to='/order'
            className='col-12 back-link'
            state={{cartItems, grandTotal}}
            >Back to Order</Link>:null}
            <div className="col-lg-6 col-12">
                <AddressForm/>            
            </div>            
            <div className="col-lg-6 col-12 mt-2">                 
                <AddressCard/>
            </div>
        </div>
        
    )
} 

export default AccountAddresses