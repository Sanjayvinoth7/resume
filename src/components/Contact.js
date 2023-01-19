import React from 'react'
import { Element } from 'react-scroll';
import "./Contact.css";
import {BsInstagram , BsLinkedin , BsGithub} from "react-icons/bs";

const Contact = () => {
  return (
    <Element className='contact' id='contact'>
      <h1><b>CONT<span>ACT</span></b></h1>
      <div className='contact_container'>
        <p>
            Email : <span>sanjayvinoth@gmail.com</span>
        </p>
        <p>
            Github Username : <span>Sanjayvinoth7</span>
        </p>
        <div className='contact_icons'> 
        
          
           <a href='https://instagram.com/_hawks_06?igshid=YmMyMTA2M2Y=' className='instagram'>
           
           <BsInstagram/>
           
           </a>
           
           <a href='https://www.linkedin.com/in/vinoth-sanjay-333a3a245/' className='linkedin'>
            
              <BsLinkedin/>
              
           </a>
          
           <a href='https://github.com/Sanjayvinoth7' className='github' >
            
            
              <BsGithub/>
              
           </a>
           
           </div>
           
    </div>
    </Element>
  )
}

export default Contact