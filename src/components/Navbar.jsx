import React, { useState } from "react";
import "../styles/navbar.css";
import logoImg from "../assets/Z4KKD.gif"; // your logo from Hero

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => setMenuActive(!menuActive);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="/" id="navbar__logo">
          <img src={logoImg} alt="Z4KKD Logo" className="navbar__logo--img" />
          Z4KKD
        </a>
        <div
          id="mobile-menu"
          className={`navbar__toggle ${menuActive ? "is-active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`navbar__menu ${menuActive ? "active" : ""}`}>
          <li className="navbar__item">
            <a href="https://z4kkd.itch.io/" className="navbar__links">
              Games
            </a>
          </li>
          <li className="navbar__item">
            <a
              href="https://github.com/Z4KKD"
              className="navbar__links"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className="navbar__item">
            <a
              href="https://www.linkedin.com/in/z4kkd/"
              className="navbar__links"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
