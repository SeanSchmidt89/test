import React, { useState } from "react";
import "./SideNav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
  AiFillGithub,
} from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";

const SideNav = () => {
  const [nav, setNav] = useState(false);
  const navHandler = (e) => {
    setNav(!nav);
  };
  return (
    <div>
      <GiHamburgerMenu className="hamburger" onClick={navHandler} />
      {nav ? (
        <div className="small-nav">
          <a href="#main">
            <AiOutlineHome size={20} />
            <span>Home</span>
          </a>
          <a href="#main">
            <AiOutlineProject size={20} />
            <span>Projects</span>
          </a>
          <a href="#main">
            <GrDocumentText size={20} />
            <span>Resume</span>
          </a>
          <a href="#main">
            <AiFillGithub size={20} />
            <span>GitHub</span>
          </a>
          <a href="#main">
            <AiOutlineMail size={20} />
            <span>Contact</span>
          </a>
        </div>
      ) : null}
      <div className="large-nav">
        <div className="large-nav-container">
          <a href="#main">
            <AiOutlineHome size={20} />
          </a>
          <a href="#main">
            <AiOutlineProject size={20} />
          </a>
          <a href="#main">
            <GrDocumentText size={20} />
          </a>
          <a href="#main">
            <AiFillGithub size={20} />
          </a>
          <a href="#main">
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
