import React from "react";
import "./skills.css";
import {
  Css,
  Html,
  Js,
  ReactJs,
  Bootstrap,
  Git,
  Tailwind,
  npm,
} from "../../assets/images";

const Skills = () => {
  return (
    <div className="skills section-container">
      <div className="skills-text__zone">
        <h1>Technical Skills</h1>
        <div className="skills-icons grid grid-cols-4 gap-x-10 gap-y-16">
          <div className="flex flex-col justify-center items-center gap-4 relative">
            <img src={Html} alt="html" className="w-full h-auto" />
            <h4 className="text-2xl font-semibold">Html5</h4>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 relative">
            <img src={Css} alt="css" className="w-full h-auto" />
            <h4 className="text-2xl font-semibold">Css3</h4>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 relative">
            <img src={Js} alt="js" className="w-full h-auto" />
            <h4 className="text-2xl font-semibold">Javascript</h4>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 relative">
            <img src={ReactJs} alt="react" className="w-full h-auto" />
            <h4 className="text-2xl font-semibold">ReactJs</h4>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 relative">
            <img src={Bootstrap} alt="bootstrap" className="w-full h-auto" />
            <h4 className="text-2xl font-semibold">Bootstrap</h4>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 relative">
            <img src={Tailwind} alt="tailwind" className="w-full h-auto" />
            <h4 className="absolute bottom-0 text-2xl font-semibold">
              TailwindCss
            </h4>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 relative">
            <img src={Git} alt="git" className="w-full h-auto" />
            <h4 className="text-2xl font-semibold">Git</h4>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 relative">
            <img src={npm} alt="npm" className="w-full h-auto" />
            <h4 className="text-2xl font-semibold">Npm</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
