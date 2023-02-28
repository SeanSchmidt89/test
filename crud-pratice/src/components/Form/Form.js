import React, { useContext } from "react";
import TodoContext from "../../TodoContext";
import "./Form.css";

const Form = () => {
  const { todos, title, titleHandler, formHandler } = useContext(TodoContext);
  return (
    <div className="form">
      <form onSubmit={formHandler}>
        <div>
          <label>Title</label>
          <input onChange={titleHandler} value={title} />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default Form;
