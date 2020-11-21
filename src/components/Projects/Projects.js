import React from 'react'
import project1 from "./image/project1.PNG"
import project2 from "./image/project2.PNG"
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
    return (
        <div>
            <img className="background" src={project1} alt="" />
            <img className="background" src={project2} alt="" />
        </div>
    )
}

export default Projects