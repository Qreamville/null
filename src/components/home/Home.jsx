import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="section-container home-page">
      <div className="text-zone">
        <h1 className="text-white text-5xl">
          Hi, 👋 <br /> I'm Balikis Oyeleye
        </h1>
        <h2>Frontend Developer</h2>
        <div className="flex flex-row gap-6">
          <Link to="/contact" className="home-contact">
            Contact Me
          </Link>
          <button className="home-contact">Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
