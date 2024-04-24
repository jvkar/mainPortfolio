import React, { useState } from "react";
import "../styles/Navbar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./icons/icons";
import logo from "../images/logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                href="#home"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#skills"
                className="nav-links"
                onClick={handleClick}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
