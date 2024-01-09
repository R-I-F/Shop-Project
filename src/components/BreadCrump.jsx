import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin   } from "react-icons/fa6";


export default function BreadCrump({title, sentence, color, links, linkNames, imgPath}){

    const location = useLocation()
    const { pathname } = location

    const checkIsActive = (link)=>{
        if (link === pathname){
            return true
        } 
        else return false
    }
    const createNavLinks = (links, linkNames)=>{
        const tempArr = links.map((item, index)=>{
            return(
                <NavLink
                key={index}
                to={item}
                className={checkIsActive(item)?'active':''}
                >{linkNames[index]}</NavLink>
            )
        })
        const resultArr = tempArr.map((element, index)=>{
            if(index===0){
                return element
            }
            else {return[' >> ', element]}
        })
        const finalResult = resultArr.flat()
        return finalResult
    }
    return(
        <div className='bc-container'>
            <img 
            className='bc-img'
            src={imgPath}/>
            <div className='bc-text'>
                <p 
                className='bc-title'
                style={{
                    color: color,
                    textShadow: `0 0 5px ${color}`}}
                >{title}</p>
                <div className='bc-links'>
                    {createNavLinks(links, linkNames)}
            </div>
                <div 
                className="socialmedia-links"
                style={{background:'rgba(255, 255, 255, 0.5)'}}
                >
                            <a 
                            href="https://www.facebook.com/ibrahim.e.refaee"
                            ><FaFacebook
                            style={{color:'#1877F2',
                                    }}
                            /></a>
                            <a 
                            href="https://github.com/R-I-F/Shop-Project"
                            ><FaGithub
                            style={{color:'#c9510c'}}
                            /></a>
                            <a 
                            href="https://www.linkedin.com/in/ibrahim-el-refaee-570096126/"
                            ><FaLinkedin
                            style={{color:'#0077b5'}}
                            /></a>
                </div>
                {/* <p className='bc-sentence'>{sentence}</p> */}
            </div>
            <div className='bc-dark-layer'></div>
    </div>
    )
    
}