
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.show);

  const addHandler = () => {
    dispatch({type: 'add'})
  }

  const deleteHandler = () => {
    dispatch({type: 'delete'})
  };

  const showHandler = () => {
    dispatch({type: 'show'})
  }
  return (
    <div>
      <p>counter comp</p>
      {show && <p>Count: {counter}</p>}
      <button onClick={addHandler}>Add</button>
      <button onClick={deleteHandler}>delete</button>
      <button onClick={showHandler}>Show</button>
    </div>
  );
};

export default Counter;
