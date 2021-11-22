import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
  const [colorFont, setColorFont] = useState("white");

  return (
    <div className="header">
      <Link to="/">
        <img className="trio-logo" src="/logo.svg" />
      </Link>
      <nav className="header-nav">
        <Link
          to="/projects"
          onMouseOver={(e) => e.target.classList.add("color-animation")}
          onMouseLeave={(e) => e.target.classList.remove("color-animation")}
        >
          Projects
        </Link>
        <Link
          to="/about"
          onMouseOver={(e) => e.target.classList.add("color-animation")}
          onMouseLeave={(e) => e.target.classList.remove("color-animation")}
        >
          About
        </Link>
        <Link
          to="/contact"
          onMouseOver={(e) => e.target.classList.add("color-animation")}
          onMouseLeave={(e) => e.target.classList.remove("color-animation")}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
