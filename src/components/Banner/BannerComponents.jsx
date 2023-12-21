import React from "react";
import Banner from "./Banner"

export default function BannerComponents(){
    return (
    <div>
        <Banner 
        status ="success" 
        title="Congratulations" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae erat posuere, convallis sem eget, gravida metus." 
        />
        <br/>
        <Banner 
        status ="warning" 
        title="Attention" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae erat posuere, convallis sem eget, gravida metus." 
        />
        <br/>
        <Banner 
        status ="error" 
        title="There is a problem with your app" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae erat posuere, convallis sem eget, gravida metus." 
        />
        <br/>
        <Banner 
        status ="neutral" 
        title="Update available" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae erat posuere, convallis sem eget, gravida metus." 
        />
    </div>
    )
}