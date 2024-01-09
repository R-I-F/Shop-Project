import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/contactUsStyles.css'
import ContactForm from "../components/contactUs-components/ContactForm.jsx";
import ContactUsCard from "../components/contactUs-components/ContactUsCard.jsx"
import GoogleMap from "../components/contactUs-components/GoogleMap.jsx";
import BreadCrump from "../components/BreadCrump.jsx";


export default function ContactUsPage(){

    const links=['/','/contactUs']
    const linkNames=["Homepage", "Contact us"]
    const title = 'Contact us!'
    const color = '#fafafa'
    const imgPath = '/shopping-cart.jpg'
    const sentence = ''

    return (
        <div className="contact-us-page">   
            <BreadCrump
            title={title}
            sentence={sentence}
            color={color}
            links={links}
            linkNames={linkNames}
            imgPath={imgPath}/>
            <div className="row px-4">
                <div className="col-12 mt-4">
                    <div className="contact-form ms-lg-2">
                        <h3>Have a Question? Ask Us!</h3>                    
                        <ContactForm/>
                    </div>
                </div>
                <div className="col-12 mt-4 align-self-center">
                    <ContactUsCard/>
                </div>
                <div className="col-12 mt-4">
                    <GoogleMap/>
                </div>
            </div>         
        </div>
    )
}