import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="container">
        <div className="form-container">
          <h2>Sign Up</h2>
          <form className="sign-in-form">
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
