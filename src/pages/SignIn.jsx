import React from 'react'
import '../styles/signInStyles.css' 
import { Link, Navigate, useLocation } from "react-router-dom"
import { fireBaseContext } from '../FireBase/FireBaseProvider'


export default function SignIn(){

    const [emailField, setEmailField] = React.useState("") // controls the email field in the form
    const [passField, setPassField] = React.useState("") // controls the password field in the form
    const [errMssg, setErrMssg] = React.useState() // error message state
    
    const isUserSignedIn = React.useContext(fireBaseContext).isUserSignedIn 

    // Boolean state to verify if user is signed in or not
    const signInWithEmailAndPassword = React.useContext(fireBaseContext).signInWithEmailAndPassword
    const signInUsingGoogle = React.useContext(fireBaseContext).signInUsingGoogle
    const auth = React.useContext(fireBaseContext).auth
    
    const location = useLocation()
    const conditionalTextEl = !isUserSignedIn?(
    <p className='conditional-text'>You are not signed in, please sign in first</p>
    ):null

    function handleChange(e){
         if(e.target.id === "email"){
              setEmailField(e.target.value)
         }
         else if(e.target.id === "password"){
              setPassField(e.target.value)
         }
    }

    function handleClick(e){
        e.preventDefault()
        if (e.target.id === 'sign-in'){
            const email = emailField
            const password = passField
            signInWithEmailAndPassword(auth, email, password).then((userCredentials)=>{
                const user = userCredentials
            })
            .catch(err=>{
                const errorCode = err.errorCode
                const errorMessage = err.message
                setErrMssg('Invalid Email/password')
                console.log('error code: '+ errorCode + ` error message: `+ errorMessage)
              })

        }
        else if (e.target.id === 'sign-in-google'){
             signInUsingGoogle()

        }
        clearFormFields()
    }

    function clearFormFields(){
        setEmailField("")
        setPassField("")
    }
        console.log(location)
        const signedInNavigationEl = location.state?.pathname?.startsWith("/shop/")?(
            <Navigate
            to={`${location.state.pathname}?page=1`}
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
        <div className='wrapper'> 
            {conditionalTextEl}           
            <div className='sign-in-page'>
                <h1 className='shop-title'>My Shop</h1>
                <form className='sign-in-form'>

                    <label htmlFor='email'>E-mail</label>
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
                    >Sign In</button>
                    <button 
                        onClick = {()=>handleClick(event)}
                        id="sign-in-google" 
                        className="sign-in-google"
                        >
                            <img src="/google_png.png" className="google-btn-logo"/>
                            Sign in with Google
                        </button>            
                </form>
            </div>
            <div className='sign-up'>                
                <p>New to My Shop ?</p>
                <button
                id='sign-up-btn'
                className="sign-in-google">
                    <Link 
                    to='/signUp'
                    state={location.state}>                        
                        Create My Shop Account
                    </Link>
                </button>
                {errMssg&&<p>{errMssg}</p>}
            </div>
        </div>
    )
}