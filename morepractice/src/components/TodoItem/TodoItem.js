import React from "react";
import { deleteTodo, completeTodo } from "../../store/todoSlice";
import { useDispatch } from "react-redux";
import "./TodoItem.css";

const TodoItem = ({ item }) => {
  // const [complete, Setcomplete] = useState(item.complete);
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteTodo(item.id));
  };

  const completeHandler = () => {
    dispatch(completeTodo(item.id));
  };
  return (
    <div className="todo-item">
      <div className="item-title">
        <p>{item.title}</p>
        <p className="complete">{item.complete ? "Done" : "Not Done"}</p>
      </div>
      <div>
        <button onClick={deleteHandler}>Delete</button>
        <button onClick={completeHandler}>complete</button>
      </div>
    </div>
  );
};

export default TodoItem;
