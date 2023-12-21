import React from "react"
import AdCard from "./AdCard"
import "../../styles/adSliderStyles.css"

import {GrNext, GrPrevious} from "react-icons/gr"



export default function AddSlider (){

    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [ad, setAd] = React.useState([])
    
    const slideWidth = 300; 
    const sliderWidth = slideWidth * ad.length;
  
    const nextSlide = function(){
        setCurrentSlide((prev)=>{return(prev+1)%4})
    }

    function prevSlide(){
        setCurrentSlide((prev)=>{return((prev-1+4)%4)})
    }

    const translateValue = -currentSlide * slideWidth;

    React.useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/categories')
            .then(res=>res.json())
            .then(data=>setAd(data))
    },[0])

    const adArrEl = [
        <AdCard 
            ad = {ad}
            currentSlide = {currentSlide}
            translateValue = {translateValue}
            n = {0}   
            discountValue={20}    
            description = "Summer Shorts" 
            brand="SunChill Shorts" 
            />,
            <AdCard 
            ad = {ad}
            currentSlide = {currentSlide}
            translateValue = {translateValue}
            n = {1}   
            discountValue={17}    
            description = "IPhone 14-proMax" 
            brand="Apple" 
            />,
            <AdCard 
            ad = {ad}
            currentSlide = {currentSlide}
            translateValue = {translateValue}
            n = {2}   
            discountValue={23}    
            description = "Caps" 
            brand="CapCulture" 
            />,
            <AdCard 
            ad = {ad}
            currentSlide = {currentSlide}
            translateValue = {translateValue}
            n = {4}   
            discountValue={10}    
            description = "Hoodies" 
            brand="UrbanChill" 
            />
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


