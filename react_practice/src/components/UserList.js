import React from "react";

const UserList = (props) => {

    const show = () => {
        console.log(props.users)
    }
  return (
    <div>
        <h1>User List Comp</h1>
      
        {props.users.map((user) => {
          <p key={user.id}>
            Name: {user.name} Age: {user.age}
          </p>
        })}
      
      <button onClick={show}>show</button>
    </div>
  );
};

export default UserList;
