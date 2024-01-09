import React from "react";

export default function ContactUsCard(){
    return(
        <div className="contact-us-card">  
            <div className="row">

                <div className="col-12">
                    <h5 className="px-2 py-2 mb-0">MyShop property office in Egypt</h5>
                </div>

                <div className="col-4">
                    <p className="px-2">Address</p>
                </div> 
                <div className="col-8">
                    <p className="px-2">221A Anwar El-sadat Street, 6 of October, Giza</p>
                </div>

                <div className="col-4">
                    <p className="px-2">Telephone</p>

                </div>
                <div className="col-8">
                    <p className="px-2">{`+20 109 065 0946`}</p>
                </div>

                <div className="col-4">
                    <p className="px-2">Telefax</p>
                </div>
                <div className="col-8">
                    <p className="px-2">{`+20 237 497 155`}</p>
                </div>

                <div className="col-4">
                    <p className="px-2">Email</p>
                </div>
                <div className="col-8">
                    <p className="px-2">contact@myShop.eg</p>
                </div>

                <div className="col-4">
                    <p className="px-2">Office hours</p>
                </div>
                <div className="col-8">
                    <p className="px-2">Monday-Friday 9am to 5pm</p>
                </div>
            </div>                              
        </div>
    )
}