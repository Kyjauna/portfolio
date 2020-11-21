import React from "react"

const NavigationTab = ({label, link}) => {
    return (
        <div> 
            <a href ={link}>{label}</a>
        </div>
    )
}

export default NavigationTab