import React from "react";
import "./navbar.css";
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
import { SiCodewars } from "react-icons/si";

const Navbar = () => {
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
    <aside className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <h1 className="font-bold text-5xl text-gold_yellow">{"<B/>"}</h1>
          <span>Balikis oyeleye</span>
        </Link>
      </div>
      <nav>{navLinks}</nav>
      <ul className="navbar-socials__links">
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
        <li>
          <a
            href="https://www.codewars.com/users/Qreamville"
            target="_blank"
            rel="noreferrer"
          >
            <SiCodewars />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Navbar;
