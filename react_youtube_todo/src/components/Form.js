import React from "react";

const Form = ({ inputText, setInputText, setTodos, todos }) => {
  const inputHandler = (event) => {
    setInputText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const todo = {
      id: Math.floor(Math.random() * 10000),
      title: inputText,
      completed: false,
    };
    setTodos((prevList) => [...prevList, todo]);
    setInputText("");
    console.log(todos);
  };

  return (
    <form>
      <input
        onChange={inputHandler}
        value={inputText}
        type="text"
        className="todo-input"
      />
      <button onClick={submitHandler} className="todo-button">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
