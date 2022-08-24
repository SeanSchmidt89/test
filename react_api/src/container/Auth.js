import React from "react";
import LoginForm from "./LoginForm";
import Home from "./Home";

const Auth = () => {
  const user = true;
  return <>{user ? <LoginForm /> : <Home />}</>;
};

export default Auth;
