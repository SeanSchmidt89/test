import React, { useState } from "react";

const TodoHeader = (props) => {
  const [todo, setTodo] = useState("");
  const inputHandler = (event) => {
    setTodo(event.target.value);
  };

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Todo List App</h3>
      <span>
        <input
          type="text"
          onChange={inputHandler}
          value={todo}
          style={{ marginRight: 10, width: 200, height: 25 }}
          placeholder="Add a Todo"
        />
        <button
          onClick={() => {props.addItem(todo); setTodo('')}}
          style={{
            width: 100,
            height: 30,
            backgroundColor: "skyblue",
            borderwidth: 0,
            fontWeight: "bold",
            color: "#fff",
          }}
          type="submit"
        >
          Add Todo
        </button>
      </span>
    </div>
  );
};

export default TodoHeader;
