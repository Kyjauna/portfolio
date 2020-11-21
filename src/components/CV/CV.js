import React from 'react'
import "./CV.css"
import cv1 from "./image/cv1.PNG"
import cv2 from "./image/cv2.PNG"

const CV = () => {
    return (
        <div className="CV">
            <img className="background" src={cv1} alt="" />
            <img className="background" src={cv2} alt="" />
        </div>
    )
}

export default CV