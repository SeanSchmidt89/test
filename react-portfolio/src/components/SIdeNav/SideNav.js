import React, { useState } from "react";
import "./SideNav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";

const SideNav = () => {
  const [nav, setNav] = useState(false);
  const navHandler = (e) => {
    setNav(!nav);
  };
  return (
    <div className="sidenav">
      <GiHamburgerMenu className="hamburger" onClick={navHandler} />
      {nav ? (
        <div className="nav-open">
          <a href="#main">
            <AiOutlineHome size={20} />
            <span>Home</span>
          </a>
          <a href="#main">
            <AiOutlineHome size={20} />
            <span>Projects</span>
          </a>
          <a href="#main">
            <AiOutlineHome size={20} />
            <span>Resume</span>
          </a>
          <a href="#main">
            <AiOutlineHome size={20} />
            <span>LinkedIn</span>
          </a>
        </div>
      ) : (
        <div>false</div>
      )}
    </div>
  );
};

export default SideNav;
