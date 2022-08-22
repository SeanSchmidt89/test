import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>Seans Todo App</h1>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
      />
      <TodoList
        inputText={inputText}
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
