import React from "react";
import { Link } from "react-router-dom";
import { fireBaseContext } from "../../FireBase/FireBaseProvider";
import { ImLocation2 } from "react-icons/im";

function AccountBar({location, pageFilter}){

    const userData = React.useContext(fireBaseContext).userData  
    const isUserDisplayName = React.useContext(fireBaseContext).isUserDisplayName
    const userFireStoreData = React.useContext(fireBaseContext).userFireStoreData
    const signOutUser = React.useContext(fireBaseContext).signOutUser
    const isUserSignedIn = React.useContext(fireBaseContext).isUserSignedIn
    const firstName = isUserDisplayName?userData?.displayName.split(' ')[0]:"Mr/Ms"
    const userInfoClassNames = "col-sm-4 col-6 my-1 ps-0 user-info"
    const isUserAddr = userFireStoreData?.address.length > 0 // boolean used to determine if the user has an address saved
    const selectedAddr = userFireStoreData?.address.filter((item)=>{return item.isSelected})[0] // the selected address 

    function handleLogout(){
        signOutUser()
    }

    const greetingEl = userData?isUserDisplayName?(
        <div className={userInfoClassNames}> 
            <p className="">Hello, {firstName}</p>
            <img className="user-img" src="/default-profile.svg"/>           
            <button
                className='logout-btn'
                onClick={()=>handleLogout()}
                >Logout</button>
        </div>
    ):(
        <div className={userInfoClassNames}>
            <div className="user-info-text">                
                <p className="mb-0">Hello, {firstName}</p>
                <p className="mb-0 user-request">Please Complete you're profile info!</p>
            </div>
            <img className="user-img" src="/default-profile.svg"/>   
            <button
                className='logout-btn'
                onClick={()=>handleLogout()}
                >Logout</button>
        </div>
    ):(
        <div className={userInfoClassNames}>
            <p className="">Hello their!</p> 
            <button className="logout-btn">
                <Link
                    className=''
                    to='./login'
                    state={{
                        pathname:location.pathname,
                        pageFilter:pageFilter
                    }}
                    >Login</Link>    
            </button>        
        </div>
    )

    const addrEl = ()=>{
        if(isUserAddr && isUserSignedIn){
            return(
                <div className="col-md-2 col-sm-2 col-2 my-1 addressEl">
                    <div>
                        <ImLocation2/>
                    </div>
                    <div>            
                        <p className="mb-0">{selectedAddr?.country.value} {selectedAddr?.city}</p>
                        <p className="mb-0">{selectedAddr?.postalCode}</p> 
                    </div>
                </div>)
        }
    }


    return(
        <div className="container-fluid custom-acc-bar">
            <div className="row py-2">
                <div className="col-md-3 col-sm-3 col-4 my-1">                    
                    <h3 className="web-title">My Shop</h3>
                </div>
                {addrEl()}
                {greetingEl}
            </div>   
        </div>
    )
} 
export default AccountBar