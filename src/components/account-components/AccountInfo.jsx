import React from "react";
import FireBaseProvider, { fireBaseContext } from "../../FireBase/FireBaseProvider";

function AccountInfo(){
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLasttName] = React.useState("")

    const userData = React.useContext(fireBaseContext).userData
    const isUserDisplayName= React.useContext(fireBaseContext).isUserDisplayName
    const setIsUserDisplayName= React.useContext(fireBaseContext).setIsUserDisplayName
    const isUserSignedIn = React.useContext(fireBaseContext).isUserSignedIn
    const profileNameUpdate = React.useContext(fireBaseContext).profileNameUpdate
    const userFireStoreData = React.useContext(fireBaseContext).userFireStoreData

    function handleChange(e){
        if(e.target.id === 'firstName'){
            setFirstName(e.target.value)
        }
        else if(e.target.id === 'lastName'){
            setLasttName(e.target.value)
        }
    }
    
    function clearForm(){
        setFirstName('')
        setLasttName('')
    }

    async function handleClick(e){
        try{          
            e.preventDefault()
            const tempFirstName = firstName
            const tempLastName = lastName
            const displayName = `${tempFirstName} ${tempLastName}`
    
    
            //backend operations
            await profileNameUpdate(displayName, userData.uid) // updates the displayName in the auth and firestore
            setIsUserDisplayName(true)
            clearForm()
        }
        catch(e){
            console.log(e)
        }
    }

    if(!isUserDisplayName){
        return (
            <div className="mt-3 mx-3 account-info account-info-form">
                <div className="row">                    
                    <form>
                        <h4 className="col-12 my-3 mx-2">Please update you're information</h4>
                        {/* first name */}
                        <label className="col-3 ms-2" htmlFor='firstName'>First Name</label>
                        <input 
                        className="col-8 mb-2 me-2"
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        onChange={()=>handleChange(event)}
                        value={firstName}/>
                        <br/>
                        {/* Last name */}
                        <label className="col-3 ms-2" htmlFor='lastName'>Last Name</label>
                        <input 
                        className="col-8 mb-2 me-2"
                        type="text" 
                        id="lastName" 
                        name="lastName"
                        onChange={()=>handleChange(event)}
                        value={lastName}/>
                    </form>
                    <br/>
                    <div className="col-4 m-2" >
                        <button className="px-3 py-2 submit-btn" onClick={()=>handleClick(event)}>Save Info</button>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div className="mt-3 mx-3 account-info">            
            <div className="row">
                <p className="col-12 ms-2 mt-2 account-info-email">Email: {userData?.email}</p>
                <p className="col-12 ms-2 account-info-displayName">Username: {userData?.displayName}</p>
            </div>
        </div>
    )
}

export default AccountInfo
