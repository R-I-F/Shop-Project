import React from "react"
import AdCard from "./AdCard"
import "../../styles/adSliderStyles.css"

import {GrNext, GrPrevious} from "react-icons/gr"



export default function AddSlider({ad, setAd}){

    const [currentSlide, setCurrentSlide] = React.useState(0)
    

    
    const slideWidth = 300; 
    const sliderWidth = slideWidth * ad.length;
  
    const nextSlide = function(){
        setCurrentSlide((prev)=>{return(prev+1)%5})
    }

    function prevSlide(){
        setCurrentSlide((prev)=>{return((prev-1+5)%5)})
    }

    const translateValue = -currentSlide * slideWidth;

    const adArrEl = [
            <AdCard 
            ad = {ad}
            currentSlide = {currentSlide}
            translateValue = {translateValue}
            n = {0}   
            discountValue={17}    
            description = "IPhone 14-proMax" 
            brand="Apple" 
            color="black"
            fontShadow = "#232323"
            />,
            <AdCard 
            ad = {ad}
            currentSlide = {currentSlide}
            translateValue = {translateValue}
            n = {1}   
            discountValue={20}    
            description = "Summer Shorts" 
            brand="SunChill Shorts" 
            color="black"
            fontShadow = "#232323"
            />,
            <AdCard 
            ad = {ad}
            currentSlide = {currentSlide}
            translateValue = {translateValue}
            n = {2}   
            discountValue={23}    
            description = "Furniture" 
            brand="IKEA" 
            color="black"
            fontShadow = "#232323"
            />,
            <AdCard 
            ad = {ad}
            currentSlide = {currentSlide}
            translateValue = {translateValue}
            n = {3}   
            discountValue={25}    
            description = "Skin-care" 
            brand="L'Oréal" 
            color="black"
            fontShadow = "#232323"
            />,
            <AdCard 
            ad = {ad}
            currentSlide = {currentSlide}
            translateValue = {translateValue}
            n = {4}   
            discountValue={10}    
            description = "Notebooks" 
            brand="Jumbo" 
            color="black"
            fontShadow = "#232323"
            />,
    ]
    
    return (
        ad.length&&<div 
        className="ad-slider">
            <GrNext 
            className="next-icon"
            onClick={()=>{nextSlide()}}/>
            <GrPrevious 
            className="prev-icon"
            onClick={()=>{prevSlide()}}/>

        {adArrEl[currentSlide]}
            
        </div>
    )
}


