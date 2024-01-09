import React from "react";
import { Link } from "react-router-dom"

export default function ProductInfo({title, brand, description, price, location, handleAddCart}){

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    function backQueryGenerator(location){
        if(location?.pathname !=="/"){
            const {categoriesFilter, offset, maxPriceFilter, minPriceFilter, orderFilter} = location
    
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
            else if(location.pathname==='/account/orders'){
                return('/account/orders')
            }
            else{
                return `../?page=${offset===0?1:(offset/9)+1}`
            }
        }
        else {
            return"/"
        }
    }

    return(
        <div className="col-md-4 col-sm-6 col-12">
            <div className="row align-items-start mt-3 info-container  px-sm-1 px-3">                
                <h2 className="col-12 info info-title">{title}</h2>
                <p className="col-12">{brand}</p>
                <p className="col-9 info info-description">{description}</p>
                <p className="col-12 info info-price">{price} EGP</p>
                <div className="col-7">                    
                    <button 
                    className="py-2 px-4 info info-btn"
                    onClick={()=>handleAddCart()}
                    >Add to cart</button>
                </div>
                <Link 
                to={backQueryGenerator(location)}
                relative="path"
                state = {{...location}}>
                    <p 
                    className="col-12 mb-0 ms-3 mt-1 back-link">
                    Back
                </p>
            </Link>
            </div>
        </div>
    )
}