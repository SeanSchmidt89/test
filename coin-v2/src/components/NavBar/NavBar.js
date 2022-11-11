import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCoins } from "react-icons/fa";
import { UserAuth } from "../../context/AuthContext";
import "./NavBar.css";

const NavBar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  console.log(user);

  const logOutHandler = (e) => {
    logOut();
    navigate('/')
  };
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
      {user ? (
        <div className="right">
          <Link to="/account">
            <button>Account</button>
          </Link>
          <button onClick={logOutHandler}>Log Out</button>
        </div>
      ) : (
        <div className="right">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/SignUp">
            <button>Sign Up</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
