import React, { useState, useContext } from "react";
import TodoContext from "./TodoContext";
import TodoList from "./components/TodoList/TodoList";
import Form from "./components/Form/Form";

function App() {
  const { addTodo } = useContext(TodoContext);

  return (
    <div className="App">
      <h1>Seans List</h1>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
