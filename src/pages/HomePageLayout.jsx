import React from "react";
import { Outlet } from "react-router-dom"
import CategoriesContext from "../components/CategoriesContext.jsx";

import NavBar from "../components/navbar-components/NavBar.jsx"
import CartModal from "../components/cart-components/CartModal.jsx";

export default function HomePageLayout(){
    return (         
        <div className="site-container">
                <CategoriesContext> 
                    <NavBar/>
                </CategoriesContext>
                    <Outlet/>

        </div>
    )
}

