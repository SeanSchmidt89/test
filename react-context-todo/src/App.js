import React from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Modal from "./modal/modal";
import {TodoProvider} from "./context/todo-context";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Seans Todo</h1>
      <TodoProvider>
        <Modal />
        <Form />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
