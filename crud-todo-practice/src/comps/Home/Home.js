import React from "react";
import Form from "../Form/Form";
import List from "../List/List";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Seans Todo List</h1>
      <Form />
      <List />
    </div>
  );
};

export default Home;
