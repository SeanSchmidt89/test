import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="form-container">
          <h2>Login</h2>
          <form className="login-form">
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button type="submit">Login</button>
          </form>
          <p>
            Dont have an account?{" "}
            <Link to="/signup">
              <span>SignUp</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
