import React from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"

import HomePageLayout from "./pages/HomePageLayout.jsx"
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import AddSlider from './components/home-components/AdSlider.jsx'
import Shop from "./pages/Shop.jsx"
import { SingleProduct } from './pages/SingleProduct.jsx'
import AccountPageLayout from './pages/AccountPageLayout.jsx'
import ContactUsPage from './pages/ContactUsPage.jsx'
import AccountInfo from './components/account-components/AccountInfo.jsx'
import AccountAddresses from './components/account-components/AccountAddresses.jsx'
import AccountPayment from './components/account-components/AccountPayment.jsx'
import AccountOrders from './components/account-components/AccountOrders.jsx'
import Order from './components/order-components/Order.jsx'
import Home from './components/home-components/Home.jsx'
import AboutUsPage from './pages/AboutUsPage.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import ThankYou from './components/ThankYou.jsx'

export default function App() {

  const storedCartItems = localStorage.getItem("cart");
  const initialCartItems = storedCartItems ? JSON.parse(storedCartItems) : []
  const [cartItems, setCartItems] = React.useState(initialCartItems);
  // cartItems initializes from local storage or as an empty object.
  const [isCatDropDown, setIsCatDropDown] = React.useState(false)
  const [isNavbarOn, setIsNavbarOn] = React.useState(false)
  

  React.useEffect(()=>{ // this effect sets cartItems array to local storage under the key of "cart"
    if(cartItems.length>0){
        localStorage.setItem("cart", JSON.stringify(cartItems))
    }
    else localStorage.clear()
  },[cartItems])


  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>   

        <Route element={
        <HomePageLayout
          isCatDropDown = {isCatDropDown}
          setIsCatDropDown = {setIsCatDropDown}
          isNavbarOn = {isNavbarOn}
          setIsNavbarOn = {setIsNavbarOn}
          />
        }>

          <Route index element={
            <Home
            cartItems = {cartItems}
            setCartItems = {setCartItems}/>}
          />
          <Route path='/shop' element={
            <Shop
            cartItems = {cartItems}
            setCartItems = {setCartItems}
            isCatDropDown = {isCatDropDown}
            setIsCatDropDown = {setIsCatDropDown}
            isNavbarOn = {isNavbarOn}
            />}/>
          <Route path='/shop/:id' element={
            <SingleProduct
            cartItems = {cartItems}
            setCartItems = {setCartItems}     
            />}/>  

          <Route path='/account' element={<AccountPageLayout/>}>

              <Route path='info' element={<AccountInfo/>}/>
              <Route path='addresses' element={<AccountAddresses/>}/>
              <Route path='payment' element={<AccountPayment/>}/>
              <Route path='orders' element={<AccountOrders/>}/>

          </Route>
          <Route path='order' element={
            <Order
            cartItems = {cartItems}
            setCartItems = {setCartItems}
            />
          }/>

          <Route path='/contactUs' element={<ContactUsPage/>}/>
          <Route path='/thankYou' element={<ThankYou/>}/>
          <Route path='/aboutUs' element={<AboutUsPage/>}/>
        </Route>

        <Route path='login' element={<SignIn/>}/>

        <Route path='signUp' element={<SignUp/>}/>
        
        
      </Routes>
    </BrowserRouter>
    </>
  )
}
