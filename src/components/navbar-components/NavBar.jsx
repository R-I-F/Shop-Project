import React, { useContext } from "react";
import { Link, NavLink, useLocation, useSearchParams } from "react-router-dom" 
import { categoriesContext } from "../CategoriesContext.jsx";
import AccountBar from "./AccountBar.jsx";
import  "../../styles/navBarStyles.css"
import { fireBaseContext } from "../../FireBase/FireBaseProvider.jsx";


function NavBar(){

    const [dropDown, setDropDown] = React.useState(false)
    const categories = useContext(categoriesContext)

    const isUserSignedIn = React.useContext(fireBaseContext).isUserSignedIn

    const location = useLocation()

    const [searchParams, setSearchParams] = useSearchParams()
    const pageFilter = searchParams.get("page")
    

    const listItems =  categories?.length?
    categories.map((item, index)=>{
        return(               
            <li 
            className="" 
            href="#"
            key= {`category + ${index}`}
            >   <Link className="" >
                    {item}
                </Link>
            </li>
        )
    }):null
    const linkClassNames = "custom-link"

    const accountPageLinkEl = isUserSignedIn?(
        <Link 
            to = './account'
            className={linkClassNames}
            >Account</Link>
    ):(
        <Link 
            to = './login'
            state={{
                pathname:location.pathname,
                pageFilter:pageFilter
            }}
            className={linkClassNames}
            >Account</Link>
    )

    function handleDropDown(){
    setDropDown(prev=>!prev)
    }

    return (
        <div className="header-bar">
            {<AccountBar
            location={location}
            pageFilter={pageFilter}
            />}
            <div className="container-fluid custom-nav-bar">
                <nav className="row justify-content-center align-items-center ">
                    <div className="col-sm-2 px-0 my-1">
                        <button 
                        className={linkClassNames}
                        onClick = {()=>handleDropDown()}
                        >Categories</button> 
                        {/* a button that shows a dropdown of categories with links to their shop query pages */}
                    </div>
                    <div className="col-sm-2 px-0 my-1">
                        <Link 
                        to="."
                        className={linkClassNames}
                        >Homepage</Link>
                    </div>
                    <div className="col-sm-2 px-0 my-1">
                        <Link 
                        to="./shop?page=1"
                        className={linkClassNames}
                        >Shop</Link>
                    </div>
                    <div className="col-sm-2 px-0 my-1">
                        <Link 
                        className={linkClassNames}
                        >About us</Link>
                    </div>
                    <div className="col-sm-2 px-0 my-2">
                        <Link 
                        className={linkClassNames}
                        >Contact us</Link>
                    </div>
                    <div className="col-sm-2 px-0 my-1">
                        {accountPageLinkEl}
                    </div>
                </nav>
                {dropDown?
                <ul className="custom-list">
                    {listItems}
                </ul>:<div></div>}
            </div>
        </div>
    )
}

export default NavBar