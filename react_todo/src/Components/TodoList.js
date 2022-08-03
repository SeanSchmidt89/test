import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  return (
    <div style={{ marginTop: 50 }}>
      {itemList.map((item, index) => (
        <TodoItem key={index} index={index} item={item} deleteItem={props.deleteItem}/>
      ))}
    </div>
  );
}
