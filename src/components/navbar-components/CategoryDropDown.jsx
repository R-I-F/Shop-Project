import React from 'react'
import { Link } from 'react-router-dom'
import { categoriesContext } from "../CategoriesContext.jsx";

function CategoryDropDown(){
    const cat = React.useContext(categoriesContext)

    const categories = ()=>{
        if(cat?.length){
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
    }

    const listItems =()=>{
        const tempCatItems = categories()
        return tempCatItems?.map((item)=>{
            return(               
                <li 
                className=" my-1" 
                href="#"
                key= {item.id}>
                    <Link 
                    className="cat-link" 
                    to={`/shop?page=1&category=${item.id}`}
                    >{item.name}</Link>
                </li>
            )
        })
    }
    
    return (
        <ul className='category-dropdown ps-3'>            
            {listItems()}
        </ul>
    )
} 

export default CategoryDropDown