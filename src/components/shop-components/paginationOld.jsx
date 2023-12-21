import React from "react";
import {GrNext, GrPrevious} from "react-icons/gr"
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import { v4 as uuidv4 } from 'uuid';
import "../../styles/paginationStyles.css"

export default function Pagination({pageFilter, setSearchParams, productsDataLength, offset}){
    const selectedPageNumStyle = {border:"2px #606161 solid", fontWeight:"700"}

    const [filteredPageArr, setFilteredPageArr] = React.useState([])
    const [nextBtnStyle, setNextBtnStyle] = React.useState({})
    const [prevBtnStyle, setPrevBtnStyle] = React.useState({})

        React.useEffect(()=>{
            if(productsDataLength.length){
                setNextBtnStyle(()=>{
                    if (parseInt(pageFilter) === productsDataLength.length){
                        return {color:"#707473", fontWeight:"500"}
                    }             
                    else {
                        return {color:"black", fontWeight:"700"}}
                }
                    )
                setPrevBtnStyle(pageFilter === "1"?
                    {color:"#707473", fontWeight:"500"}:
                    {color:"black",fontWeight:"700"})
            }
            else if(!productsDataLength.length) {
                setNextBtnStyle({color:"#707473", fontWeight:"500"})
                setPrevBtnStyle({color:"#707473", fontWeight:"500"})
            } 

        },[productsDataLength.length])
      React.useEffect(() => {
        if (productsDataLength.length) {
            let pageCase = 0;
          let newFilteredPageArr = productsDataLength.map((page, index) => {
            
      
            if (parseInt(pageFilter) <= 3) {
              if (index < 3 || index === productsDataLength.length - 1) {
                pageCase = 1;
                return page; // Return the page
              }
            } else if (parseInt(pageFilter) === 4) {
              if (index < 4 || index === productsDataLength.length - 1) {
                pageCase = 2;
                return page; // Return the page
              }
            } else if (parseInt(pageFilter) === productsDataLength.length - 2 || parseInt(pageFilter) === productsDataLength.length - 1) {
              if (
                index === 0 ||
                index === parseInt(pageFilter) - 2 ||
                index === parseInt(pageFilter) - 1 ||
                index === parseInt(pageFilter) ||
                index === productsDataLength.length - 1
              ) {
                pageCase = 3;
                return page; // Return the page
              }
            } else if (parseInt(pageFilter) === productsDataLength.length) {
              if (index === 0 || index > productsDataLength.length - 4) {
                pageCase = 3;
                return page; // Return the page
              }
            } else {
              if (
                index === 0 ||
                index === parseInt(pageFilter) - 2 ||
                index === parseInt(pageFilter) - 1 ||
                index === parseInt(pageFilter) ||
                index === productsDataLength.length - 1
              ) {
                pageCase = 4;
                return page; // Return the page
              }
            }
            
            return undefined; // Return undefined for non-matching conditions
          });
          // Filter out undefined values first
        newFilteredPageArr = newFilteredPageArr.filter((page) => page !== undefined);
          if (pageCase === 1) {
            newFilteredPageArr.splice(3, 0, "...");
          } else if (pageCase === 2) {
            newFilteredPageArr.splice(4, 0, "...");
          } else if (pageCase === 3) {
            newFilteredPageArr.splice(1, 0, "...");
          } else if (pageCase === 4) {
            newFilteredPageArr.splice(4, 0, "...");
            newFilteredPageArr.splice(1, 0, "...");
          }
      
          setFilteredPageArr(newFilteredPageArr);
        }
      }, [productsDataLength, offset]);
        
const filteredEditedPageArrEl = productsDataLength?.length? filteredPageArr.map((item)=>{
   return item !== "..."?(
        
            <div 
            className="page-numbers-number"
            style = {
              item == parseInt(pageFilter)?
              selectedPageNumStyle:null}
            onClick= {()=> handlePageClicked(event)}
            id={item}
            key={item}>
                <p>{item}</p>
            </div>  

    ):(
        <div 
        key = {uuidv4()}
        className="page-numbers-dots"
        style = {item == parseInt(pageFilter)?selectedPageNumStyle:null}>
            <p>{item}</p>
        </div>  
    )
}):null

function handlePageClicked(e){
    if(e.target.id === "previous"){
        if(pageFilter === "2"){
            setSearchParams({page: `${parseInt(pageFilter)-1}`})
            setPrevBtnStyle({color:"#707473",fontWeight:"500"})
        }
        else if(pageFilter !== "1"){
            setSearchParams({page: `${parseInt(pageFilter)-1}`})
            setPrevBtnStyle({color:"black",fontWeight:"700"})
            setNextBtnStyle({color:"black",fontWeight:"700"})
        }
    }
    else if(e.target.id === "next"){ 
        if(!productsDataLength.length){
            console.log("do nothing")
        }
        else if(parseInt(pageFilter) === productsDataLength.length-1){
            setSearchParams({page: `${parseInt(pageFilter)+1}`})        
            setNextBtnStyle({color:"#707473",fontWeight:"500"})
        }
        
        else if(parseInt(pageFilter) !== productsDataLength.length){ 
            setSearchParams({page: `${parseInt(pageFilter)+1}`})
            setNextBtnStyle({color:"black",fontWeight:"700"})
            setPrevBtnStyle({color:"black",fontWeight:"700"})
        } 
        
    }       
    else {
        if(parseInt(e.target.id) === productsDataLength.length){         
            setSearchParams({page: e.target.id}) 
            setNextBtnStyle({color:"#707473",fontWeight:"500"})
            setPrevBtnStyle({color:"black",fontWeight:"700"})
        }
        else if (parseInt(e.target.id) === 1){             
            setSearchParams({page: e.target.id}) 
            setNextBtnStyle({color:"black",fontWeight:"700"})
            setPrevBtnStyle({color:"#707473",fontWeight:"500"})
        }
        else {
            setSearchParams({page: e.target.id})
            setNextBtnStyle({color:"black",fontWeight:"700"})
            setPrevBtnStyle({color:"black",fontWeight:"700"})
        }
    }
}
    

    function handleMouseOver(e){
        e.target.id === "next" ?
        setNextBtnStyle((prev)=>{return{
            ...prev,
            border: "2px #606161 solid",
            borderRadius:"0 10px 10px 0 "
            
        }}): e.target.id === "previous"?
        setPrevBtnStyle((prev)=>{return{
            ...prev,
            border: "2px #606161 solid",
            borderRadius:"10px 0 0 10px "
        }}):null
    }

    function handleMouseLeave(){
        setNextBtnStyle((prev)=>{return{
            ...prev,
            border:"2px transparent solid"
        }})
        setPrevBtnStyle((prev)=>{return{
            ...prev,
            border:"2px transparent solid"
        }})
    }

    return(
        <div className="page-numbers-container">                
                <div className="page-numbers">
                        <div 
                        className="page-numbers-btn"
                        style={prevBtnStyle}
                        onMouseOver={()=>handleMouseOver(event)}
                        onMouseLeave={()=>handleMouseLeave()}
                        onClick={()=>handlePageClicked(event)}
                        id="previous">                        
                            <BiLeftArrow className="page-numbers-btn-i"/>
                            <p>Previous</p>
                        </div>
                        {filteredEditedPageArrEl}
                        <div 
                        className="page-numbers-btn"
                        style={nextBtnStyle}
                        onMouseOver={()=>handleMouseOver(event)}
                        onMouseLeave={()=>handleMouseLeave()}
                        onClick={()=>handlePageClicked(event)}
                        id="next">                        
                            <p>Next</p>
                            <BiRightArrow className="page-numbers-btn-i"/>
                        </div>
                    
                </div>
            </div>
    )
}