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
      complete: false,
    };
    setTodos((prevList) => {
      return [...prevList, todo];
    });
    setInputText("");
    console.log(todos);
  };

  return (
    <div>
      <h3>Form</h3>
      <input
        onChange={inputHandler}
        value={inputText}
        type="text"
        placeholder="Add a Todo"
      />
      <button onClick={submitHandler} type="submit">
        Add
      </button>
    </div>
  );
};

export default Form;
