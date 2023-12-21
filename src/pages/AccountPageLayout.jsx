import React from 'react'
import { NavLink, Outlet, Navigate, useLocation } from 'react-router-dom'
import { fireBaseContext } from '../FireBase/FireBaseProvider'

function AccountPageLayout(){
    const isUserSignedIn = React.useContext(fireBaseContext).isUserSignedIn
    const location = useLocation()
    const linksClass = `account-page-custom-links`
    const activeClass = {background:"#febd69", color: "#232323", fontWeight: "900"}


    if(isUserSignedIn){        
        return (
            <div className='account-page'>
                <nav className='ms-2 mt-2'>
                    <div className='row g-2 justify-content-center'>                    
                        <div className='col-sm-2'>                    
                            <NavLink
                            className={linksClass}
                            style={({ isActive }) => isActive?activeClass:null}
                            to='./info'
                            >Info</NavLink>
                        </div>
                        <div className='col-sm-2'>                    
                            <NavLink
                            className={linksClass}
                            style={({ isActive }) => isActive?activeClass:null}
                            to='./addresses'
                            >Addresses</NavLink>
                        </div>
                        <div className='col-sm-2'>                    
                            <NavLink
                            className={linksClass}
                            style={({ isActive }) => isActive?activeClass:null}
                            to='./payment'
                            >Payment</NavLink>
                        </div>
                        <div className='col-sm-2'>                    
                            <NavLink
                            className={linksClass}
                            style={({ isActive }) => isActive?activeClass:null}
                            to='./orders'
                            >Orders</NavLink>
                        </div>
                    </div>
                </nav>
                <Outlet/>
            </div>
        )
    }
    else{
        return(
            <Navigate
            to="/login"
            state={{pathname: location.pathname}}
            />
        )
    }
    }

export default AccountPageLayout