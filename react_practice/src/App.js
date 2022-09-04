import React from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <h1>Seans Todo</h1>
        <Form />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
