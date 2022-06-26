import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Link to="/" className="sidebar-brand">
        <h1 className="font-bold text-5xl text-gold_yellow mt-8">{"<B/>"}</h1>
        <span className="grid place-items-center pr-3 pt-2">
          Balikis oyeleye
        </span>
      </Link>
      <nav className="sidebar-nav text-center w-full">
        <NavLink exact="true" to="/" className="sidebar-nav__home">
          <FaHome />
        </NavLink>
        <NavLink exact="true" to="/about" className="sidebar-nav__about">
          <FaUser />
        </NavLink>
        <NavLink exact="true" to="/contact" className="sidebar-nav__contact">
          <FaEnvelope />
        </NavLink>
      </nav>
      <ul className="sidebar-socials__links">
        <li>
          <a
            href="https://github.com/Qreamville"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Balqees_Oyeleye"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/balikis-oyeleye-3624a6191/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
