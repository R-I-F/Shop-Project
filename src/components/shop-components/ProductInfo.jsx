import React from "react";
import { Link } from "react-router-dom"

export default function ProductInfo({title, brand, description, price, location, handleAddCart}){

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    function backQueryGenerator(location){
        const categoriesFilter = location?.categoriesFilter
        const offset = location?location.offset:0
        const maxPriceFilter = location?.maxPriceFilter
        const minPriceFilter = location?.minPriceFilter
        const orderFilter = location?.orderFilter

        if(categoriesFilter&&minPriceFilter&&maxPriceFilter&&orderFilter){
            return `../?page=${offset===0?1:(offset/9)+1}&category=${categoriesFilter}&price_min=${minPriceFilter}&price_max=${maxPriceFilter}&order=${orderFilter}`
        }
        else if(categoriesFilter&&minPriceFilter&&maxPriceFilter){
            return `../?page=${offset===0?1:(offset/9)+1}&category=${categoriesFilter}&price_min=${minPriceFilter}&price_max=${maxPriceFilter}`
        }
        else if(categoriesFilter&&orderFilter){
            return `../?page=${offset===0?1:(offset/9)+1}&category=${categoriesFilter}&order=${orderFilter}`
        }
        else if(minPriceFilter&&maxPriceFilter&&orderFilter){
            return `../?page=${offset===0?1:(offset/9)+1}&price_min=${minPriceFilter}&price_max=${maxPriceFilter}&order=${orderFilter}`
        }
        else if (categoriesFilter){
            return `../?page=${offset===0?1:(offset/9)+1}&category=${categoriesFilter}`
        }
        else if (minPriceFilter&&maxPriceFilter){
            return `../?page=${offset===0?1:(offset/9)+1}&price_min=${minPriceFilter}&price_max=${maxPriceFilter}`
        }
        else if (orderFilter){
            return `../?page=${offset===0?1:(offset/9)+1}&order=${orderFilter}`
        }
        else{
            return `../?page=${offset===0?1:(offset/9)+1}`
        }
    }

    return(
        <div className="col-md-4 col-sm-6 col-12">
            <div className="row align-items-start mt-3 info-container">                
                <h2 className="col-12 info info-title">{title}</h2>
                <p className="col-12">{brand}</p>
                <p className="col-7 info info-description">{description}</p>
                <p className="col-12 info info-price">{price} EGP</p>
                <button 
                className="col-5 py-2 info info-btn"
                onClick={()=>handleAddCart()}
                >Add to cart</button>
                <Link 
                to={backQueryGenerator(location)}
                relative="path"
                state = {{priceArr: location?.priceArr}}>
                    <p 
                    className="col-12 mb-0 ms-3 mt-1 back-link">
                    Back
                </p>
            </Link>
            </div>
        </div>
    )
}