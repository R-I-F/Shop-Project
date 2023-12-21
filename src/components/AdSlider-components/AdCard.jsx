import React from "react";
import {GrNext, GrPrevious} from "react-icons/gr"
import { AiFillCreditCard } from "react-icons/ai"

export default function AdCard({ad, currentSlide, translateValue, setAd,n, discountValue, description, brand}){
    return(
        <div 
            key = {ad[n].id}
            className="ad-card row align-items-center custom-row-height-2"
                >               
                <div className="ad-title col-8 no-padding  row custom-row-height-1 align-items-center">                    
                    <h4 className="ad-title-name col-12 ">{ad[n].name}'s Week</h4>
                    <h2 className="ad-title-discount col-12">Up to {discountValue}% off</h2>
                    <h2 className="ad-title-description col-12">{description}</h2>
                    <div className="ad-title-card col-12">
                        <AiFillCreditCard/><span>Buy with installments</span>
                    </div>
                    <h2 className="ad-title-brand col-12">{brand}</h2>
                </div>
                <div className="col-4 no-padding ">
                    <img className="ad-img "
                    src={ad[n].image}/>
                </div>
            </div>
    )       
    }




