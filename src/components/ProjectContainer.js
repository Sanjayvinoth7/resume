import React from "react";
import { Element } from "react-scroll";
import Project from "./Project";
import project1 from "../../src/images/project1.png";
import userportal from "../../src/images/userportal.png";
import calculator from "../../src/images/calculator.png";
import "./ProjectContainer.css"

const Projectcontainer = () => {
  const projects = [
    {
      img:`${project1}`,
      title: "SHOP CART",
      describe:
        "I have created a shopping cart that added the products to the cart,and that automamtically add the total amount of the product prices and we can remove the products from the cart",
      link: "https://cosmic-yeot-85c6ba.netlify.app/?",
    },
    {
      img:`${userportal}`,
      title: "USER PORTAL",
      describe:
        "I have created a User portal with CRUD operation method",
      link: "https://dreamy-chaja-4eb520.netlify.app/",
    },
    {
      img:`${calculator}`,
      title: "CALCULATOR",
      describe:
        "I have Desingned a calculator that as a actual calculator ",
      link: "https://effortless-youtiao-aadb96.netlify.app/",
    },
    {
      img: "https://images.wallpaperscraft.com/image/single/laptop_keyboard_backlight_215877_300x188.jpg",
      title: "Shop Cart",
      describe:
        "I have created a shopping cart that added the products to the cart,and that automamtically add the total amount of the product prices and we can remove the products from the cart",
      link: "https://www.google.com/",
    },
    {
      img: "https://images.wallpaperscraft.com/image/single/laptop_keyboard_backlight_215877_300x188.jpg",
      title: "Shop Cart",
      describe:
        "I have created a shopping cart that added the products to the cart,and that automamtically add the total amount of the product prices and we can remove the products from the cart",
      link: "https://www.google.com/",
    },
    {
      img: "https://images.wallpaperscraft.com/image/single/laptop_keyboard_backlight_215877_300x188.jpg",
      title: "Shop Cart",
      describe:
        "I have created a shopping cart that added the products to the cart,and that automamtically add the total amount of the product prices and we can remove the products from the cart",
      link: "https://www.google.com/",
    },
   
  ];

  return (
    <Element className="projectcontainer" id="project">
      <h1><b>PRO<span>JECT</span></b></h1>
      <p>Here are some project which I developed </p>
      <div className="projectcontainer_pro">
        
        {projects.map((project, index) => {
          return ( <Project
              key={index}
              img={project.img}
              title={project.title}
              describe={project.describe}
              link={project.link}
            />
          );
        })}
      </div>
      
    </Element>
  );
};

export default Projectcontainer;