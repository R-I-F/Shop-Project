import React from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import BreadCrump from './BreadCrump'

export default function ThankYou(){
    const location = useLocation()

    const links=['/','/contactUs','/thankYou']
    const linkNames=["Homepage", "Contact us", "Thank You"]
    const title = 'Thank you!'
    const color = 'greenyellow'
    const imgPath = '/success-photo.jpg'
    const sentence = 'Your message has been submitted'
    
    const summaryMssg = ()=>{
        if(location.state){
            const{ name, email, subject, message } = location.state
            return(
                <>
                    <h6 style={{textDecoration:"underline"}}>Submitted Message:</h6>
                    <p className='mb-1'><strong>Subject:</strong> {subject}</p>
                    <p><strong>Message:</strong> {message}</p>
                </>
            )
        }
    }
    return(
        <div>
            <BreadCrump
            title={title}
            sentence={sentence}
            color={color}
            links={links}
            linkNames={linkNames}
            imgPath={imgPath}/>
            <div className='summary'>
                {summaryMssg()}
            </div>
            <p className='summary'>We will get back to you within 48 hours</p>
        </div>
    )
}