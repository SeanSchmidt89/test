import React from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Modal from "./modal/modal";
import SearchInput from "./components/SearchInput";
import SearchList from "./components/SearchList";
import { TodoProvider } from "./context/todo-context";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Modal />
        <h1>Seans Todo</h1>
        <div className="todoContainer">
          <div className="left">
            <Form />
            <TodoList />
          </div>
          <div className="right">
            <SearchInput />
            <SearchList />
          </div>
        </div>
      </TodoProvider>
    </div>
  );
}

export default App;
