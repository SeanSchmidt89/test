import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const inputHandler = (event) => {
    setTodo(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTodo("");
  };

  const deleteHandler = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };


  const toggleComplete = (id) => {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <br />
      <form onSubmit={submitHandler}>
        <input type="text" onChange={inputHandler} value={todo} />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id}>
          <div>{todo.text}</div>
          <button onClick={() => deleteHandler(todo.id)}>Delete</button>
          <input type="checkbox" checked={todo.completed}  onChange={() => toggleComplete(todo.id)} />
        </div>
      ))}
    </div>
  );
}

export default App;
