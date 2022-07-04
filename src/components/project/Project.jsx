import React from "react";
import Loader from "react-loaders";
import "./project.css";

const Project = () => {
  return (
    <>
      <div className="projects section-container">
        <div className="project-text__zone">
          <h1>Projects</h1>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Project;
