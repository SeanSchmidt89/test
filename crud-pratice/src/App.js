import React from "react";
import TodoList from "./components/TodoList/TodoList";
import Form from "./components/Form/Form";

function App() {

  return (
    <div className="App">
      <h1>Seans List</h1>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
