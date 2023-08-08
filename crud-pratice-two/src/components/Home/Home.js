import React from "react";
import Form from "../Form/Form";
import TodoList from "../TodoList/TodoList";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Form />
      <TodoList />
    </div>
  );
};

export default Home;
