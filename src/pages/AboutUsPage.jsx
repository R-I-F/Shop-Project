import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/aboutUsStyles.css'
import { IoMdArrowDropdown } from "react-icons/io";
import BreadCrump from "../components/BreadCrump";

export default function AboutUsPage(){
    const [isOverviewDropDown, setIsOverviewDropDown] = React.useState(true)
    const [isTeamDropDown, setIsTeamDropDown] = React.useState(true)
    const [istestimonialDropDown, setistestimonialDropDown] = React.useState(true)

    function handleDropDown(x){
        x((prev)=>!prev)
    }

    const links=['/','/aboutUs']
    const linkNames=["Homepage", "About us"]
    const title = 'About us!'
    const color = '#fafafa'
    const imgPath = '/shopping-cart.jpg'
    const sentence = ''

    const overViewContent = ()=>{
        if(isOverviewDropDown){
            return(
                <div className="overview-content">
                    <p>
                    {"Welcome to Myshop, your go-to destination where seamless design meets a delightful shopping experience. Established in 2023, Myshop stands as a testament to innovation in the online retail space. This project was conceived not only as a training ground to hone my skills but also as a valuable addition to my portfolio as a Full-Stack developer."}</p>

                    <p>{"At Myshop, our mission is simple: to provide an intuitive and visually appealing online shopping platform that caters to a diverse range of needs. We take pride in curating a collection of products that blend quality, style, and functionality."}</p>
                </div>
            )
        }
    }

    const teamContent = ()=>{
        if(isTeamDropDown){
            return(
                <div className="team-content">
                    <div className="team-img-container">                        
                        <img 
                        className="profile-img"
                        src="profile-photo.jpg"
                        />
                    </div>
                    <div className="team-info">
                        <div className="team-name">Ibrahim El-Refaee</div>
                        <div className="team-role">Full-Stack Developer</div>
                    </div>
                </div>
            )
        }
    }

    const testimonialContent = ()=>{
        if(istestimonialDropDown){
            return(
                <div className="team-content">
                    <div className="team-img-container">                        
                        <img 
                        className="profile-img"
                        src="testimonial-photo.jpg"
                        />
                    </div>
                    <div className="team-info">
                        <div className="team-name">Grace Anderson</div>
                        <div className="team-role">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="about-us-page">
            <BreadCrump
            title={title}
            sentence={sentence}
            color={color}
            links={links}
            linkNames={linkNames}
            imgPath={imgPath}/>

            <div className="content">
                <div className="overview-container">
                    <button 
                    className="drop-down-btn"
                    onClick={()=>handleDropDown(setIsOverviewDropDown)}>
                        <IoMdArrowDropdown
                        style={{
                            fontSize:"25px"}}/>    
                        <h5>OverView</h5>
                    </button>
                    {overViewContent()}
                </div>

                <div className="team-container">
                    <button 
                        className="drop-down-btn"
                        onClick={()=>handleDropDown(setIsTeamDropDown)}>
                            <IoMdArrowDropdown
                            style={{
                                fontSize:"25px"}}/>    
                            <h5>Team</h5>
                        </button>
                        {teamContent()}
                </div>

                <div className="team-container">
                    <button 
                        className="drop-down-btn"
                        onClick={()=>handleDropDown(setistestimonialDropDown)}>
                            <IoMdArrowDropdown
                            style={{
                                fontSize:"25px"}}/>    
                            <h5>Testimonials</h5>
                        </button>
                        {testimonialContent()}
                </div>
            </div>
        </div>
    )
}