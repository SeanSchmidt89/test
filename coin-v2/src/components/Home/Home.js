import React from "react";
import NavBar from "../NavBar/NavBar";
import Coins from "../Coins/Coins";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Coins />
      <Link to="/about">About Page</Link>
    </div>
  );
};

export default Home;
