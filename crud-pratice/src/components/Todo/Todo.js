import React, { useState, useContext } from "react";
import TodoContext from "../../TodoContext";
import "./Todo.css";

const Todo = ({ item }) => {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(item.title);
  const { todos, setTodos } = useContext(TodoContext);

  const deleteHandler = () => {
    let filteredTodos = todos.filter((todo) => todo.id !== item.id);
    setTodos(filteredTodos);
  };

  const completeHandler = () => {
    let completedList = todos.map((todo) => {
      if (todo.id === item.id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(completedList);
  };

  const editHandler = (e) => {
    setEditText(e.target.value);
  };

  const editFormHandler = (e) => {
    e.preventDefault();
    let editedList = todos.map((todo) => {
      if (todo.id === item.id) {
        return { ...todo, title: editText };
      }
      return todo;
    });
    setTodos(editedList);
    setEdit(!edit);
  };

  return (
    <div className="todo">
      <p className="todo-title">{item.title}</p>
      <p className="todo-complete">
        complete: {item.complete ? "yes" : "no"}{" "}
        <span>priority: {item.priority}</span>
      </p>
      <div className="todo-options">
        <button onClick={deleteHandler}>Delete</button>
        <button onClick={completeHandler}>Complete</button>
        <button
          onClick={() => {
            setEdit(!edit);
          }}
        >
          Edit
        </button>
      </div>
      {/* if you hit edit this input pops up to edit todo title */}
      {edit ? (
        <form className="edit-form" onSubmit={editFormHandler}>
          <input onChange={editHandler} value={editText} />
          <button type="submit">Update Todo</button>
        </form>
      ) : null}
    </div>
  );
};

export default Todo;
