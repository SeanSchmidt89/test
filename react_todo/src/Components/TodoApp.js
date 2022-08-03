import React, {useState} from "react";
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';

export default function TodoApp() {
  const [itemList, setItemList] = useState([
    {
      title: "Take a shower",
      done: false,
    },
    {
      title: "buy stuff",
      done: false,
    },
    {
      title: "fix car",
      done: true,
    },
  ]);

  const addItem = (title) => {
    setItemList([...itemList, { title, done: false }]);
  };

  const deleteItem = (index) => {
    setItemList([
      ...itemList.slice(0, index),
      ...itemList.slice(index + 1, itemList.length),
    ]);
  };
  return(
  <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
    <div>
      <TodoHeader addItem={addItem}/>
      <TodoList deleteItem={deleteItem} itemList={itemList}/>
    </div>
  </div>
  )
}
