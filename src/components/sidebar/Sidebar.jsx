import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaCog,
} from "react-icons/fa";
import { VscSymbolProperty } from "react-icons/vsc";
import "./sidebar.css";

const Sidebar = () => {
  // Array of Navigation Links
  const links = [
    { to: "/", class_name: "sidebar-nav__home", icon: <FaHome /> },
    { to: "/about", class_name: "sidebar-nav__about", icon: <FaUser /> },
    { to: "/skills", class_name: "sidebar-nav__skills", icon: <FaCog /> },
    {
      to: "/projects",
      class_name: "sidebar-nav__project",
      icon: <VscSymbolProperty />,
    },
    {
      to: "/contact",
      class_name: "sidebar-nav__contact",
      icon: <FaEnvelope />,
    },
  ];

  // Mapping of Array of Navigation Links

  const navLinks = links.map((link, _idx) => {
    return (
      <NavLink exact="true" to={link.to} className={link.class_name} key={_idx}>
        {link.icon}
      </NavLink>
    );
  });

  return (
    <aside className="sidebar">
      <Link to="/" className="sidebar-brand">
        <h1 className="font-bold text-5xl text-gold_yellow mt-8">{"<B/>"}</h1>
        <span className="grid place-items-center pr-3 pt-2">
          Balikis oyeleye
        </span>
      </Link>
      <nav className="sidebar-nav text-center w-full">{navLinks}</nav>
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
