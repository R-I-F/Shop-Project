import React from "react";
import {GrNext, GrPrevious} from "react-icons/gr"
import { screenSizeContext } from "../../context/ScreenSizeProvider";

function Carousel({title, filteredProductsArrEl}){
    const screenSize = React.useContext(screenSizeContext)
    const [firstIndex, setFirstIndex]  = React.useState(0)
    const [carouselWidth, setCarouselWidth] = React.useState("") 
    //  index to slice from the products arr 
    const [n, setN] = React.useState()
    // number of items within the carousel array
    React.useEffect(()=>{ 
        // effect that sets N based on screen size
        if(screenSize.xLarge){
            setN(6)
            setCarouselWidth("1340px")
        }
        else if(screenSize.large){
            setN(4)
            setCarouselWidth("1120px")
        }
        else if(screenSize.medium){
            setN(4)
            setCarouselWidth("900px")
        }
        else if(screenSize.small){
            setN(3)
            setCarouselWidth("660px")
        }
        else {
            setN(1)
            setCarouselWidth("270px")
        }
    },[screenSize])

    // const tempProducts = new Array(50).fill(null).map((item, index)=>{
    //     return(
    //         <div
    //         key={index}
    //         className="temp-product">
    //         {index}</div>
    //     )
    // })
    

    const carouselArr = (array, firstIndex, n)=>{
        const dataLength = (array.length) 
        let tempArr=[]
        for(let i=0; i<n;i++){
            const currentIndex = ((i + firstIndex) % dataLength + dataLength) % dataLength;
            tempArr.push(array[currentIndex]);
        }
        return tempArr
    }
    
    function handleClickNext(){
        setFirstIndex((prev)=>prev+1)
    }

    function handleClickPrev(){
        setFirstIndex((prev)=>prev-1)
    }
    return(
        <div 
        className="carousel-container"
        style={{width:carouselWidth}}>            
                <h3>{title}</h3>
            <div 
            className="carousel">
                <div className="row">                    
                    {carouselArr(filteredProductsArrEl, firstIndex, n)}
                </div>
                <GrNext 
                className="carousel-next-icon"
                onClick={()=>handleClickNext()}/>
                <GrPrevious 
                className="carousel-prev-icon"
                onClick={()=>handleClickPrev()}/>
            </div>
        </div>
    )
}

export default Carousel