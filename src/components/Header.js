import React from "react";
import {Link} from "react-scroll";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <h1>
          PORT<span>FOLIO</span>
        </h1>
      </div>
      <div className="header_right">
        <Link to="about" offset={-100} smooth={true} duration={500}>
            <h4>About</h4>
        </Link>
        <Link to="skill" offset={-100} smooth={true} duration={500}>
            <h4>Skills</h4>
        </Link>
        <Link to="project" offset={-100} smooth={true} duration={500}>
            <h4>Projects</h4>
        </Link>
        <Link to="contact" offset={-100} smooth={true} duration={500}>
            <h4>Contact</h4>
        </Link>
      </div>
    </div>
  );
}

export default Header;