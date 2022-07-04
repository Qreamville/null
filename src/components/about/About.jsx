import React from "react";
import Loader from "react-loaders";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about section-container">
        <div className="about-text__zone">
          <h1>About Me</h1>
          <p className="mb-8">
            Balikis Oyeleye ( Pronounced as Ba-lee-kiss O-ye-le-ye ) is a Civil
            Engineering Student transitioning into Web development. She is a
            self-taught Frontend Developer specializing in building web
            application and responsive websites.
          </p>
          <p className="mb-8">
            She is an optimistic, enthusiastic and motivated Junior Frontend
            Developer that is seeking an opportunity to contribute to
            Institutions by implementing ideas, concepts and methodologies
            learned thereby adding values to the organization.
          </p>
          <p>
            I'm passionate about building beautiful and functional applications.
            I build projects using HTML, CSS, Javascript, React etc.
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
