import { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/Profile.png";

const Navbar = () => {
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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setShowMenu(false); 
    }
  };

  return (
    <div className="navbar">
      <div className="title navtext" onClick={() => scrollToSection("home")}>
        Iharishsh
      </div>
      <div className={`menu ${showMenu ? "show" : ""}`} ref={menuRef}>
        <ul>
          <li className="navtext" onClick={() => scrollToSection("skills")}>
            Skills
          </li>
          <li className="navtext" onClick={() => scrollToSection("projects")}>
            Projects
          </li>
          <li
            className="navtext"
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </li>
          <li className="navtext" onClick={() => scrollToSection("about")}>
            About
          </li>
        </ul>
      </div>
      <img className="logo" src={logo} onClick={toggleMenu} alt="Logo" />
    </div>
  );
};

export default Navbar;
