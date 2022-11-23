import "./HeroImgStyles.css";
import bg1 from "../assets/bg1.jpeg";

import React from "react";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={bg1} alt="i" />
        <div className="container-content">
        <div className="content">
          <p>HI, I'M A</p>
          <h1>FullStack Developer</h1>
          <div>
            <Link to="/project" className="btn">
              PROJECTS
            </Link>
            <Link to="/contact" className=" btn btn-light">
              CONTACT
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
