import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({toggleTheme,font,src}) => {
 
  useEffect(() => toggleTheme);

  return (
    <div className="header">
      <Link to="/">
        <img className="trio-logo" src={src}/>
      </Link>
      <nav className="header-nav" >
        <Link
          to="/projects"
          onMouseOver={(e) => e.target.classList.add("color-animation")}
          onMouseLeave={(e) => e.target.classList.remove("color-animation")}
          style={{color:font}}
        >
          Projects
        </Link>
        <Link
          to="/about"
          onMouseOver={(e) => e.target.classList.add("color-animation")}
          onMouseLeave={(e) => e.target.classList.remove("color-animation")}
          style={{color:font}}
        >
          About
        </Link>
        <Link
          to="/contact"
          onMouseOver={(e) => e.target.classList.add("color-animation")}
          onMouseLeave={(e) => e.target.classList.remove("color-animation")}
          style={{color:font}}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
