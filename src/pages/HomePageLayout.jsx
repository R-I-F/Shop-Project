import React from "react";
import { Outlet } from "react-router-dom"
import ScreenSizeProvider from'../context/ScreenSizeProvider.jsx'
import Footer from "../components/Footer.jsx";

import NavBar from "../components/navbar-components/NavBar.jsx"

export default function HomePageLayout({isCatDropDown, setIsCatDropDown, cartItems, setCartItems, isNavbarOn, setIsNavbarOn}){
    return (         
        <div className="site-container">
            <ScreenSizeProvider>                
                <NavBar
                isCatDropDown = {isCatDropDown}
                setIsCatDropDown = {setIsCatDropDown}
                isNavbarOn={isNavbarOn}
                setIsNavbarOn={setIsNavbarOn}
                />
            </ScreenSizeProvider>
            <Outlet/>
            <Footer/>
        </div>
    )
}

