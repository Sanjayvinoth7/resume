import React from "react";
import { Element } from "react-scroll";
import skillimg from "../../src/images/skills.img";
import { LinearProgress } from "@mui/material";
import "./Skill.css";
import { FaReact } from 'react-icons/fa';
import { DiJavascript1,DiMysql} from 'react-icons/di';
import {AiFillHtml5} from 'react-icons/ai';
import {SiMongodb} from 'react-icons/si';

const Skill = () => {
  return (
    <Element className="skillcontainer" id="skill">
      
      <div className="skillimage">
        <img src={skillimg} alt="" />
      </div>
      
      <div className="skillcontainer_text">
        <h2><b>SKILL<span>SET</span></b></h2>

        <div className="skillcontainer_skill">
          <h5 style={{color:"#F0DB4F"}}><DiJavascript1/> Javascript</h5>
          <div className="skillcontainer_slider skillcontainer_slider1">
            <LinearProgress variant="determinate" value={75} />
          </div>
        </div>
      
        <div className="skillcontainer_skill">
          <h5 style={{color:"#61DBFB"}} > <FaReact/> Reactjs</h5>
          <div className="skillcontainer_slider skillcontainer_slider2">
            <LinearProgress variant="determinate" value={75} />
          </div>
        </div>

        <div className="skillcontainer_skill">
          <h5 style={{color:"#00758F"}}><DiMysql/> SQL</h5>
          <div className="skillcontainer_slider skillcontainer_slider3">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>

        <div className="skillcontainer_skill">
          <h5 style={{color:"#F06529"}}><AiFillHtml5/> HTML</h5>
          <div className="skillcontainer_slider skillcontainer_slider4">
            <LinearProgress variant="determinate" value={85} />
          </div>
        </div>

        <div className="skillcontainer_skill">
          <h5 style={{color:"#589636"}}><SiMongodb/> MongoDB</h5>
          <div className="skillcontainer_slider skillcontainer_slider5">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
      </div>
      
    </Element>
  );
};

export default Skill;