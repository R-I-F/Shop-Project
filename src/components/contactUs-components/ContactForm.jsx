import React from "react";
import { useNavigate, useLocation  } from "react-router-dom";
import { fireBaseContext } from "../../FireBase/FireBaseProvider";

export default function ContactForm(){
    const [contactformData, setContentFormData] = React.useState({
        name: "" ,
        email: "" ,
        subject: "" ,
        message: "" ,
    })
    const [error, setError] = React.useState("")
    const isUserSignedIn = React.useContext(fireBaseContext).isUserSignedIn
    const location = useLocation()

    function clearFormFields(){
        setContentFormData({
            name: "" ,
            email: "" ,
            subject: "" ,
            message: "" ,
            })
      }
      
      function handleChange(e){
        if(e.target.id === "name"){
            setContentFormData((prev)=>{return{
                ...prev,
                name: e.target.value
            }})
        }
        else if(e.target.id==="email"){
            setContentFormData((prev)=>{return{
                ...prev,
                email: e.target.value
            }})
        }
        else if(e.target.id==="subject"){
            setContentFormData((prev)=>{return{
                ...prev,
                subject: e.target.value
            }})
        }
        else if(e.target.id==="message"){
            setContentFormData((prev)=>{return{
                ...prev,
                message: e.target.value
            }})
        }
    }

    const navigate = useNavigate()
    
    function handleSubmitForm(e){
        e.preventDefault()
        setError('')
        if(areAllFieldsFilled(contactformData)){
            if(isUserSignedIn){
                navigate('/thankYou',{state:{...contactformData}})
            }
            else{
                navigate('/login',{state:{...contactformData, pathname:location.pathname}})
            }
        }
        else{
            setError('some fields are empty')
        }
    }
    
    function areAllFieldsFilled(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {      
                if (obj[key] === "" || obj[key] === null || obj[key] === undefined) {
                    return false;
                }
            }
        }
        return true;
    }
    
    const labelClassName = 'col-sm-3 col-11';
    const inputClassName = 'col-sm-8 col-11';
    return (
        <form className="mt-4">
                <div className="row gy-2">                
                            <label 
                            htmlFor="name"
                            className={labelClassName}
                            >Name</label> 
                            <input 
                            className={inputClassName}
                            type="text" 
                            name="contact-form" 
                            id="name"
                            onChange={()=>handleChange(event)}
                            value={contactformData.name}
                            />

                    <div className="col-12">   
                        <div className="row">
                            <label 
                            htmlFor="email"
                            className={labelClassName}
                            >E-mail</label> 
                            <input 
                            className={inputClassName}
                            type="email" 
                            name="contact-form" 
                            id="email"
                            onChange={()=>handleChange(event)}
                            value={contactformData.email}
                            />
                        </div>             
                    </div>

                    <div className="col-12">
                        <div className="row">
                            <label 
                            htmlFor="subject"
                            className={labelClassName}
                            >Subject</label> 
                            <input 
                            className={inputClassName}
                            type="text" 
                            name="contact-form" 
                            id="subject"
                            onChange={()=>handleChange(event)}
                            value={contactformData.subject}
                            />
                        </div> 
                    </div>

                    <div className="col-12">
                        <div className="row">
                            <label 
                            htmlFor="message"
                            className={labelClassName}
                            >Message</label> 
                            <textarea 
                            className={inputClassName}
                            rows="4"
                            cols="50"
                            name="contact-form" 
                            id="message"
                            onChange={()=>handleChange(event)}
                            value={contactformData.message}
                            />
                        </div> 
                    </div>

                    {error.length>0 && <div className="col-12">
                        <div className="row">
                            <p>{error}</p>
                        </div> 
                    </div>}

                    <div className="col-12">
                        <button
                        className="submit-btn ms-auto end-margin"
                        onClick={()=>handleSubmitForm(event)}
                        >Submit Message
                        </button>
                    </div>
                </div>
            </form>
    )
}