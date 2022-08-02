import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const inputHandler = (event) => {
    setTodo(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Date().getTime(),
      text: todo,
    };
    setTodos([...todos, newTodo]);
    setTodo("");
  };

  return (
    <div className="App">
      <h1>todo</h1>
      <form onSubmit={submitHandler}>
        <input value={todo} type="text" onChange={inputHandler} />
        <button type="submit">Add Todo</button>
      </form>

      {todos.map((todo) => {
        <div key={todo.id}>
          <div>{todo.text}</div>
        </div>;
      })}
    </div>
  );
}

export default App;
