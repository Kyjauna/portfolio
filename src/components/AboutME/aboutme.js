import React from 'react'
import "./aboutme.css"
import aboutme1 from "./image/aboutme1.PNG"
import aboutme2 from "./image/aboutme2.PNG"

const aboutme = () => {
    return (
        <div className="aboutme">
            <img className="background" src={aboutme1} alt="" />
            <img className="background" src={aboutme2} alt="" />
        </div>
    )
}

export default aboutme