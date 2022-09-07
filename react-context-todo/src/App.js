import React from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Modal from "./modal/modal";
import { TodoProvider } from "./context/todo-context";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Modal />
        <h1>Seans Todo</h1>
        <Form />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
