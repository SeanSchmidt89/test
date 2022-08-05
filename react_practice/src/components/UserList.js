import React from "react";

const UserList = (props) => {

    const show = () => {
        console.log(props.users)
    }
  return (
    <div>
        <h1>User List Comp</h1>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
      
      <button onClick={show}>show</button>
    </div>
  );
};

export default UserList;
