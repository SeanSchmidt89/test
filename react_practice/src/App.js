import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const[userList, setUserList] = useState([]);

  const userHandler = (userName, userAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        {name: userName, age: userAge, id: Math.random().toString()}
      ];
    });
  };

  return (
    <div className="App">
      <h1>React</h1>
      <AddUser onAdd={userHandler} />
      <UserList users={userList}/>
    </div>
  );
}

export default App;
