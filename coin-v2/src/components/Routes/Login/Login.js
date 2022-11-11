import React, { useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = UserAuth();
  const navigate = useNavigate();

  const logInHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/account");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="login">
      <div className="container">
        <div className="form-container">
          <h2>Login</h2>
          {error ? <p className="error">{error}</p> : null}
          <form onSubmit={logInHandler} className="login-form">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="password"
            />
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
