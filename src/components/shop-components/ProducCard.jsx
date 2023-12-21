import React from "react"
import { Link } from "react-router-dom"
import {AiFillHeart, AiOutlineShoppingCart} from "react-icons/ai"
import "../../styles/productCardStyles.css"

export default function ProductCard({item, offset, categoriesFilter, minPriceFilter, maxPriceFilter, priceArr, orderFilter}){
    const [like, setLike] = React.useState(false)
    const [addCart, setAddCart] = React.useState(false)

    function handleLike(){
        setLike((prev)=>!prev)
    }

    function handleCart(){
        setAddCart((prev)=>!prev)
    }


    return (
        <div className="product-card border mt-3 ">
            <div className="row align-items-start gx-0">                
                <p className="product-card-title col-12 p-3">{item.title}</p>
                <Link 
                className="col-12 gy-2"
                to={`./${item.id}`}
                state={{
                offset: offset,
                categoriesFilter: categoriesFilter,
                minPriceFilter: minPriceFilter,
                maxPriceFilter: maxPriceFilter,
                priceArr: priceArr,
                orderFilter: orderFilter 
                }}
                >
                    <img 
                    className="product-card-img"
                    src={`/${item.images[0]}`}/>
                    <div className="product-card-description">                        
                        <p>{item.description}</p>
                    </div>
                </Link>
                <div className="product-card-price col-12">
                    <p className="product-card-price-p1 ">EGP</p> 
                    <p className="product-card-price-p2">{item.price}</p>
                    <AiFillHeart 
                    className="product-card-price-heart"
                    style = {like&&{fill:"red"}}
                    onClick = {()=>handleLike()}/>
                    <AiOutlineShoppingCart 
                    className="product-card-price-cart"
                    style = {addCart&&{fill:"red"}}
                    onClick = {()=>handleCart()}/>
                </div>
            </div>

        </div>
    )
}