import React from "react";
import { Link } from "react-router-dom";
import pdf from "../../assets/Resume.pdf";
import "./home.css";

const Home = () => {
  return (
    <div className="home section-container">
      <div className="home-text__zone">
        <h1 className="text-white text-5xl">
          Hi, 👋 <br /> I'm Balikis Oyeleye
        </h1>
        <h2>Frontend Developer</h2>
        <div className="flex flex-row gap-6">
          <Link to="/contact" className="home-contact">
            Contact Me
          </Link>
          <a className="home-download" href={pdf} download>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
