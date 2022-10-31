import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const toggleClick = (e) => {
    setClick(!click);
  };
  return (
    <div className="header">
      <div className="container">
        <h1>
          De<span className="primary">Fi</span>
        </h1>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Featured</a>
          </li>
          <li>
            <a href="/">Earn</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <div className="btn-group">
          <button className="btn">Connect Wallet</button>
        </div>
        <div className="hamburger" onClick={toggleClick}>
          {!click ? (
            <FaBars size={20} style={{ color: "#333" }} />
          ) : (
            <FaTimes size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
