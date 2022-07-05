import React from "react";
import Loader from "react-loaders";
import "./project.css";
import { data } from "../../assets/projectData";

const Project = () => {
  return (
    <>
      <div className="projects section-container">
        <div className="projects-text__zone">
          <h1>My Projects</h1>
          <div className="projects-section grid grid-cols-2 gap-x-8 gap-y-14 mb-28">
            {data.map((proj) => {
              return (
                <div className="project" key={proj.id}>
                  <div className="project-image mb-4">
                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="w-full h-auto"
                    />
                  </div>
                  <h2 className="project-name text-4xl font-bold my-6">
                    {proj.name}
                  </h2>
                  <p className="project-about text-xl">{proj.about}</p>
                  <div className="project-stack flex gap-12 my-6">
                    {proj.stack.map((element, idx) => {
                      return (
                        <h5
                          className="px-4 py-2 rounded-lg font-bold text-lg"
                          key={idx}
                        >
                          {element}
                        </h5>
                      );
                    })}
                  </div>
                  <div className="project-links flex gap-4">
                    {proj.links.map((link, idx) => {
                      return (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="font-semibold text-xl"
                          key={idx}
                        >
                          {link.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Project;
