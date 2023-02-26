import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todo, setTodo] = useState({});

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    setTodo({ todoTitle: title, todoContent: content });
    setContent("");
    setTitle("");
    console.log(todo);
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
      {todo.todoTitle && <p>{todo.todoTitle}</p>}
    </div>
  );
}

export default App;
