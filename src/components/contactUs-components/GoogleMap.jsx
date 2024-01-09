import React from "react";

export default function GoogleMap(){
    return(
        <div className="google-map">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1453.1939719268485!2d31.054055406804466!3d29.970887077176634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1703769756361!5m2!1sen!2seg" 
                    width="600" 
                    height="450" 
                    style={{border:0, marginLeft:"auto", marginRight:"auto"}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"/>
                </div>
    )
}
