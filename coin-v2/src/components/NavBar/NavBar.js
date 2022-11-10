import React from "react";
import { Link } from "react-router-dom";
import { FaCoins } from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <FaCoins className="icon" />
        <Link to="/">
          <h1>
            Coin <span className="purple">Search</span>
          </h1>
        </Link>
      </div>
      <div className="right">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/SignUp">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
