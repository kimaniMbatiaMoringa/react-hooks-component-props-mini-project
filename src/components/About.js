import React from "react";

function About(props){
    return(
        <aside>
            <img src= {props.imgSrc} alt="blog logo"></img>
            <p> {props.aboutData} </p>
        </aside>
    )
}

export default About;