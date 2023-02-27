import React, { useState, useContext } from "react";
import List from "./List";
import TodoContext from "./TodoContext";

function App() {
  const { addTodo } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    addTodo({ todoTitle: title, todoContent: content });
    setContent("");
    setTitle("");
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={formHandler}>
        <div>
          <label>Title</label>
          <input onChange={titleHandler} value={title} />
        </div>
        <div>
          <label>Content</label>
          <input onChange={contentHandler} value={content} />
        </div>
        <button type="submit">Add Todo</button>
      </form>
      <List />
    </div>
  );
}

export default App;
