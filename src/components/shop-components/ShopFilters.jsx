import React from "react"
import { categoriesContext } from "../CategoriesContext"
import { v4 as uuidv4 } from "uuid"
import "../../styles/shopFiltersStyles.css"
import { MdOutlineFilterList } from "react-icons/md";


export default function ShopFilters({categoriesId, setCategoriesId, priceFilter, setPriceFilter, handleSubmitBtn, loading, order, setOrder, isSmallScreen, showFilters, setShowFilters}){
    const cat = React.useContext(categoriesContext)
    const categories = ()=>{
        return cat.map((item)=>{
            if(item==="Health and Beauty"){
                return {
                    name:item,
                    id:4
                }
            }
            else if (item==="Electronics"){
                return{
                    name:item,
                    id:1
                }
            }
            else if (item==="Fashion and Apparel"){
                return{
                name:item,
                id:2 
                }  
            }
            else if (item==="Home and Furniture"){
                return{
                    name:item,
                    id:3
                }  
            }
            else if (item==="Books and Stationery"){
                return{
                    name:item,
                    id:5
                }  
            }            
        })
    }

    const categoriesRadioEl = ()=>
        {        
            if(cat.length){
                const tempCatArr = categories()
                return tempCatArr.map((item)=>{
                    return(
                    <div 
                    className="col-12"
                    key= {uuidv4()}>            
                        <input
                        type="radio"
                        name="categories"
                        id={item.id}
                        checked= {categoriesId === item.id.toString()}
                        onChange={()=>handleChange(event)}
                        onClick={()=>handleChange(event)}/>
                        <label htmlFor={item.id}>
                            {item.name}
                        </label>
                    </div>        
                )
                })
            }
        }

    const priceRadioEl = <div className="col-12">
        <div>            
            <input 
            type="radio"
            name="price"
            id="0To500"
            checked= {priceFilter === "0To500"}
            onChange={()=>handleChange(event)}
            onClick={()=>handleChange(event)}/>
            <label htmlFor="0To500">0 to 500 EGP</label>
        </div>
        <div>            
            <input 
            type="radio"
            name="price"
            id="500To1000"
            checked= {priceFilter === "500To1000"}
            onChange={()=>handleChange(event)}
            onClick={()=>handleChange(event)}/>
            <label htmlFor="500To1000">500 to 1000 EGP</label>
        </div>
        <div>            
            <input 
            type="radio"
            name="price"
            id="1000To1500"
            checked= {priceFilter === "1000To1500"}
            onChange={()=>handleChange(event)}
            onClick={()=>handleChange(event)}/>
            <label htmlFor="1000To1500">1000 to 1500 EGP</label>
        </div>
        <div>            
            <input 
            type="radio"
            name="price"
            id="1500To2000"
            checked= {priceFilter === "1500To2000"}
            onChange={()=>handleChange(event)}
            onClick={()=>handleChange(event)}/>
            <label htmlFor="1500To2000">1500 to 2000 EGP</label>
        </div>
    </div>

    const orderRadioEl = <div className="col-12">
        <div>            
            <input 
            type="radio"
            name="order"
            id="asc-price"
            checked= {order === "asc-price"}
            onChange={()=>handleChange(event)}
            onClick={()=>handleChange(event)}/>
            <label htmlFor="asc-price">Price ascending</label>
        </div>
        <div>            
            <input 
            type="radio"
            name="order"
            id="dec-price"
            checked= {order === "dec-price"}
            onChange={()=>handleChange(event)}
            onClick={()=>handleChange(event)}/>
            <label htmlFor="dec-price">Price decending</label>
        </div>
    </div>
        
    function handleChange(e){
        console.log(e.target.id)
        if(e.target.name === "categories"){
            categoriesId === (e.target.id) ? setCategoriesId(""):
            setCategoriesId(e.target.id)
        }
        else if(e.target.name === "price"){
            priceFilter === e.target.id ? setPriceFilter(""):
            setPriceFilter(e.target.id)
        }
        else if(e.target.name==="order"){
            order === e.target.id ? setOrder(""):
            setOrder(e.target.id)
        }
    }

    function handleShowFilter(){
        setShowFilters((prev)=>!prev)
    }

    const filterBtnClass = ()=>{
        if(showFilters){
            return 'filters-dropdown-btn-active'
        }
        else return 'filters-dropdown-btn'
    }

    const FiltersDropDown = ()=>{
        if(showFilters){
            return(
            <div className="filters-dropdown">
                <div className="row ps-2 mt-2">            
                    <form className="col-12 row m-0 p-0 filter-form">
                        <h4 className="col-12">Category</h4>
                        {categoriesRadioEl()}
                        <h4 className="col-12 mt-4">Price</h4>
                        {priceRadioEl}
                        <h4 className="col-12 mt-4">Order By</h4>
                        {orderRadioEl}
                        <button
                        className="col-12 mt-4 mx-auto py-2 form-btn"
                        onClick = {()=>handleSubmitBtn(event)}
                        >Search</button>
                    </form>
                </div>
            </div>)
        }
    }

    const filterEl = ()=>{
        if(!isSmallScreen){ // if wide screens 
            return (
                <div className="col-2 shop-filters">
                    <div className="row ps-2">            
                        <h3 className="col-12 filters-parent-title">Filters</h3>
                        <form className="col-12 row m-0 p-0 filter-form">
                            <h4 className="col-12">Category</h4>
                            {categoriesRadioEl()}
                            <h4 className="col-12 mt-4">Price</h4>
                            {priceRadioEl}
                            <h4 className="col-12 mt-4">Order By</h4>
                            {orderRadioEl}
                            <button
                            className="col-12 mt-4 mx-auto py-2 form-btn"
                            onClick = {()=>handleSubmitBtn(event)}
                            >Search</button>
                        </form>
                    </div>
                </div>
                )
        }
        else if(isSmallScreen){
            return(
                <div>
                    <button
                    className={filterBtnClass()}
                    onClick={()=>handleShowFilter()}
                    ><MdOutlineFilterList/>Filters</button>
                    {FiltersDropDown()}
                </div>
            )
        }
    }

    if(loading){
      return (<div className=""></div>)
   }
    else if(!loading){
       return filterEl()
    }   
}
    
