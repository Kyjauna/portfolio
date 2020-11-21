import React, { useRef } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import background from "./Images/background.PNG"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import 'bootstrap/dist/css/bootstrap.min.css';
import CV from './components/CV/CV';
import Projects from './components/Projects/Projects';
import About from './components/AboutME/aboutme';
import MyIcon from './components/MyIcon/MyIcon';
import './App.css';


library.add(
  fab,
  far
)

const App = () => {

  const githubRef = useRef("https://github.com/kyjauna")
  const linkedInRef = useRef("https://www.linkedin.com/in/kyjauna-marshall/")
  const emailRef = useRef("mailto:kyjauna.marshall@mail.mcgill.ca")

  return (
    <div className="App">
      <img className="background" src={background} alt="" />
      <div className="icons">
        <MyIcon link={linkedInRef} library="fab" iconName="linkedin" />
        <MyIcon link={githubRef} library="fab" iconName="github" />
        <MyIcon link={emailRef} library="far" iconName="envelope" />
      </div>
      <div className="tabs-div">
        <Tabs defaultActiveKey="CV" id="main-nav-tabs">
          <Tab eventKey="CV" title="CV">
            <CV />
          </Tab>
          <Tab eventKey="aboutme" title="About">
            <About />
          </Tab>
          <Tab eventKey="projects" title="Projects">
            <Projects />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default App;