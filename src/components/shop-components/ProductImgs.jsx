import React from "react";

export default function ProductImgs({imgArr}){

    const[selectedImgIndex, setSelectedImgIndex] = React.useState(0)

    const imgArrEl = imgArr.map((img, index)=>{
        return(             
                <img
                className="product-img"
                key={index}
                id={index}
                src={`/${img}`}/>
        )
    })

    function handleImgClick(e){
        setSelectedImgIndex(e.target.id)
    }

    return (
        <div className="single-product-page-imgs-container col-xl-5 col-md-4 col-sm-6 col-12 ms-1 row m">
            <div className="img-selector col-2 px-0  ">
                {imgArrEl.map((item, index)=>{
                    return(
                    <div 
                    className=" m-2 product-img-sm"
                    key={index}
                    onClick={()=>{handleImgClick(event)}}>
                        {item}                        
                    </div>
                    )
                })}
            </div>
            <div className="current-img col-10 p-2">
                {imgArrEl[selectedImgIndex]}
            </div>
        </div>
    )
}