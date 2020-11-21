import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './MyIcon.css'

const MyIcon = ({link, library, iconName}) => {
    return (
    <a className="social-icons" href={link.current}>
    <FontAwesomeIcon icon={[library, iconName]} size="2x"/>
    </a>
    )
}

export default MyIcon