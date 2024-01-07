// Navbar.jsx

import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/Profile.png";

const Navbar = ({ handleSectionChange }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <div className="title navtext" onClick={() => handleSectionChange("home")}>
        Iharishsh
      </div>
      <div className={`menu ${showMenu ? "show" : ""}`} ref={menuRef}>
        <ul>
          <li
            className="navtext"
            onClick={() => handleSectionChange("skills")}
          >
            Skills
          </li>
          <li className="navtext">Projects</li>
          <li className="navtext">Experience</li>
          <li className="navtext">About</li>
        </ul>
      </div>
      <img className="logo" src={logo} onClick={toggleMenu} alt="Logo" />
    </div>
  );
};

export default Navbar;
