import React from 'react'
import { useLocation } from 'react-router-dom'
import AdSlider from './AdSlider'
import TestAd from './TestAd'
import Carousel from './Carousel'
import { fireBaseContext } from '../../FireBase/FireBaseProvider'
import ScreenSizeProvider from '../../context/ScreenSizeProvider'
import '../../styles/homePageStyles.css'
import ProductCard from '../shop-components/ProducCard'
import ReactLoading from 'react-loading'

function Home({cartItems, setCartItems}){
    const [ad, setAd] = React.useState([])
    const getAllCategoriesInDb = React.useContext(fireBaseContext).getAllCategoriesInDb    
    const productsInDb = React.useContext(fireBaseContext).productsInDb
    const location = useLocation()

    React.useEffect(()=>{
        getAllCategoriesInDb()
        .then(res=>setAd(res))
    },[0])

    const arrElContent = (item, index)=>{
        return(
            <div 
            className="carousel-product-card col-12 col-md-4 col-lg-3 col-xl-3 col-xxl-2 "
            key={`${item.id} ${index}`}>   
                <ProductCard
                cartItems = {cartItems}
                setCartItems = {setCartItems}                
                item = {item}/>
            </div>
        )
    }
    
    const highestRatingProductsArrEl = ()=>{
        // filter the data by highest rating
        const highestRatingProductsArr = productsInDb?.filter((item)=>{return item.rating===5})
        return highestRatingProductsArr?.map((item, index)=>{
            return(
                arrElContent(item, index)
            )
        })
    }
    const electronicProductsArrEl = ()=>{
    // filter the data by electronic products
    const electronicProductsArr = productsInDb?.filter((item)=>{return item.category.id===1})
        return electronicProductsArr?.map((item, index)=>{
            return(
                arrElContent(item, index)
            )
        })
    }

    const fashionProductsArrEl = ()=>{
    // filter the data by electronic products
        const fashionProductsArr = productsInDb?.filter((item)=>{return item.category.id===2})
        return fashionProductsArr?.map((item, index)=>{
            return(
                arrElContent(item, index)
            )
        })
    }

    const furnitureProductsArrEl = ()=>{
        // filter the data by electronic products
        const furnitureProductsArr = productsInDb?.filter((item)=>{return item.category.id===3})
        return furnitureProductsArr?.map((item, index)=>{
            return(
                arrElContent(item, index)
            )
        })
    }

    const cosmeticProductsArrEl = ()=>{
        // filter the data by electronic products
        const cosmeticProductsArr = productsInDb?.filter((item)=>{return item.category.id===4})
        return cosmeticProductsArr?.map((item, index)=>{
            return(
                arrElContent(item, index)
            )
        })
    }

    const libraryProductsArrEl = ()=>{
        // filter the data by electronic products
        const cosmeticProductsArr = productsInDb?.filter((item)=>{return item.category.id===5})
        return cosmeticProductsArr?.map((item, index)=>{
            return(
                arrElContent(item, index)
            )
        })
    }
    
    const render = ()=>{
        if(productsInDb.length&&ad.length){
            return(
                <ScreenSizeProvider>            
                    <AdSlider
                    ad={ad}
                    setAd={setAd}/>
                    <div className='homepage-container'>                
                        <Carousel
                        title={'Top rated products'}
                        filteredProductsArrEl={highestRatingProductsArrEl()}/>
                        <TestAd/>
                        <Carousel
                        title={'Electronic products'}
                        filteredProductsArrEl={electronicProductsArrEl()}/>
                        <Carousel
                        title={'Fashion products'}
                        filteredProductsArrEl={fashionProductsArrEl()}/>
                        <TestAd/>
                        <Carousel
                        title={'Furniture products'}
                        filteredProductsArrEl={furnitureProductsArrEl()}/>
                        <Carousel
                        title={'Cosmetic products'}
                        filteredProductsArrEl={cosmeticProductsArrEl()}/>
                        <TestAd/>
                        <Carousel
                        title={'Library products'}
                        filteredProductsArrEl={libraryProductsArrEl()}/>
                        <TestAd/>
                    </div>
                </ScreenSizeProvider>
            )
        }
        else{
            return(
                <ReactLoading 
                type="spin" 
                color="#141414"
                className="loading-icon"
                width={"15%"}
                height={"15%"}/>
            )
        }
    }
    
    return(
        render()
    )
}
export default Home