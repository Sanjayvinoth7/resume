import React, { useState } from "react";
import "./Project.css";

const Project = ({img, title, describe, link}) => {
  const [visible, setVisible] = useState(false);
  return (
    <a href={link}>
      <div className="project"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {visible ? (
          <div className="project_content">
            <h4><b>{title}</b></h4>
            <p><b>{describe}</b></p>
          </div>
        ) : (
          <img src={img} alt="" />
        )}
      </div>
    </a>
  );
};

export default Project;