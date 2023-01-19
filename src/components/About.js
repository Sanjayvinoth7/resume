import React from 'react'
import {Link,Element} from 'react-scroll'
import './About.css';



function About() {
  return (
    <Element className='about' id="about">
        <div className='about_container' >
           <h1>Hello,I'm Sanjay Vinoth</h1>
           <h4><b>I am a Front-End Developer/Full Stack Developer</b> </h4>
           <a href="https://drive.google.com/file/d/1tPgPbrqDLiMFhW1IIU-65jz78XF7IW_g/view?usp=share_link">
            <button className='about_resume'>Resume</button>
           </a>
           <Link to="project" offset={-100} smooth={true} duration={500} >
            <button className='about_work'>My Work</button>
           </Link>
        </div> 
    </Element>
  )
}

export default About