import React from "react";
import { fireBaseContext } from "../FireBase/FireBaseProvider";
import { Navigate, useLocation } from "react-router-dom";


export default function SignUp(){
     const [emailField, setEmailField] = React.useState("") // controls the email field in the form
     const [passField, setPassField] = React.useState("") // controls the password field in the form
     const [errMssg, setErrMssg] = React.useState()

     const createNewUserWithEmailAndPassword = React.useContext(fireBaseContext).createNewUserWithEmailAndPassword
     const isUserSignedIn = React.useContext(fireBaseContext).isUserSignedIn
     const location = useLocation()
     function handleClick(e){
          e.preventDefault()
          const email = emailField
          const password = passField
          createNewUserWithEmailAndPassword(email, password)
          .then((user)=>{
               if (user){}
          })
          .catch((err)=>{
               if(err === 'auth/invalid-email'){
                    setErrMssg('Invalid email error occurred.')
               }
               else if(err='short password'){
                    setErrMssg('Password is too short')
               }
          })
     }
     
     function handleChange(e){
          if(e.target.id === "email"){
               setEmailField(e.target.value)
          }
          else if(e.target.id === "password"){
               setPassField(e.target.value)
          }
     }
     
     function clearFormFields(){
          setEmailField("")
          setPassField("")
      }

      const signedInNavigationEl = location.state?.pathname?.startsWith("/shop/")?(
          <Navigate
          to='/order'
          />
      ):location.state?.pathname?.startsWith("/shop")?(
          <Navigate
          to={`${location.state.pathname}?page=${location.state.pageFilter}`}
          />
      ):(
          <Navigate
          to={location.state?.pathname}
          />
      )


  if(isUserSignedIn){
      return (
          signedInNavigationEl
      )
  }


     return (
          <>
               <div className='sign-in-page'>
                    <h1 className='shop-title'>My Shop</h1>
                    <form className='sign-in-form'>

                         <label htmlFor='username'>E-mail</label>
                         <input 
                         id='email' 
                         type='email' 
                         name='userForm'
                         onChange={()=>handleChange(event)}
                         value={emailField}
                         />

                         <label htmlFor='password'>Password</label>
                         <input 
                         id='password' 
                         type='password' 
                         name='userForm'
                         onChange={()=>handleChange(event)}
                         value={passField}
                         />

                         <button
                         onClick={()=>handleClick(event)}
                         id='sign-in'
                         className='sign-in-btn'
                         >Sign up</button>  
                    </form>
               </div>
                    {errMssg&&<p className="sign-up">{errMssg}</p>}
          </>
     )
}