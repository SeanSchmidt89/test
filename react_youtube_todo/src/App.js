import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, filter]);

  const filterHandler = () => {
    switch (filter) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Seans Todo App</h1>
      </header>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        setTodos={setTodos}
        todos={todos}
        setFilter={setFilter}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
