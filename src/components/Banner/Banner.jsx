import React from "react";
import '../../styles/bannerCss.css'
import { BsCheckCircleFill, BsExclamationTriangleFill } from "react-icons/bs"
import { TbCircleXFilled } from "react-icons/tb"
import { AiFillInfoCircle } from "react-icons/ai"

export default function Banner({status, title, text}){
    let bannerStyle = {}

    status === "success"? 
        bannerStyle = { 
            iconName: BsCheckCircleFill,
            nameOfClass: "success banner",
            iconColor: "#34D399",
            titleColor: "#065F46",
            textColor: "#047857"
        }:
        
    status === "warning"? 
        bannerStyle ={
            iconName: BsExclamationTriangleFill,
            nameOfClass: "warning banner",
            iconColor: "#FBBF24",
            titleColor: "#92400E",
            textColor: "#B45309"
        }:
        
    status === "error"? 
        bannerStyle ={
            iconName: TbCircleXFilled,
            nameOfClass: "error banner",
            iconColor: "#F87171",
            titleColor: "#92400E",
            textColor: "#B45309"
        }:

    status === "neutral"? 
        bannerStyle ={
            iconName: AiFillInfoCircle,
            nameOfClass: "neutral banner",
            iconColor: "#60A5FA",
            titleColor: "#1E40AF",
            textColor: "#1C51B9"
        }:null        

    return (
        <div className={bannerStyle.nameOfClass}>
            {React.createElement(bannerStyle.iconName, {
                className: "icon",
                color: bannerStyle.iconColor
            })}
            <div>
            {title && <h3 style={{ color: bannerStyle.titleColor }}>{title}</h3>}
            {text && <p style={{ color: bannerStyle.textColor }}>{text}</p>}
            </div>
        </div>
        );
          
}