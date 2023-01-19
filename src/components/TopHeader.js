import React from 'react'
import {Element} from "react-scroll"
import About from './About'
import './TopHeader.css'

function TopHeader() {
  return (
    <Element name="about" className='topheader' >
        <About/>
    </Element>
  )
}

export default TopHeader