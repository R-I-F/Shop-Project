import React from "react";
import {GrNext, GrPrevious} from "react-icons/gr"
import { AiFillCreditCard } from "react-icons/ai"

export default function AdCard({ad, currentSlide, translateValue, setAd,n, discountValue, description, brand, color, fontShadow}){
    return(
        <div 
            key = {ad[n].id}
            className="ad-card"
                >               
                <div 
                className="ad-info"
                style={{color:color, textShadow:`0 0 4px ${fontShadow}`}}>                    
                    <h4 className="ad-info-name">{ad[n].name}'s Week</h4>
                    <h2 className="ad-info-discount">Up to {discountValue}% off</h2>
                    <h2 className="ad-info-description">{description}</h2>
                    <div className="ad-info-card">
                        <AiFillCreditCard/><span>Buy with installments</span>
                    </div>
                    <h2 className="ad-info-brand">{brand}</h2>
                </div>
                <div className="ad-img-container">
                    <img className="ad-img"
                    src={ad[n].image}/>
                    <div className='ad-white-layer'></div>
                </div>
            </div>
    )       
    }




