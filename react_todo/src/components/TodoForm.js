import React, { useState } from "react";

function TodoForm() {
    const [input, setInput] = useState("");
    
    const submitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <form onSubmit={submitHandler} className="todo-form">
      <input
        type="text"
        placeholder="Add a Todo"
        value={input}
        name="text"
        className="todo-input"
      ></input>
      <button className="todo-button">Add Todo</button>
    </form>
  );
}

export default TodoForm;
