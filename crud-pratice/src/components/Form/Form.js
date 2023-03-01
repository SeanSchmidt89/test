import React, { useContext } from "react";
import TodoContext from "../../TodoContext";
import "./Form.css";

const Form = () => {
  const { title, titleHandler, formHandler } = useContext(TodoContext);
  return (
    <div className="form">
      <form onSubmit={formHandler}>
        <div>
          <label>Title</label>
          <input onChange={titleHandler} value={title} />
        </div>
        <div>
          <label>Priority</label>
          <select name='priority'>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">low</option>
          </select>
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default Form;
