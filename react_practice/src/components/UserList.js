import React from "react";
import { Component } from "react";

class UserList extends Component {
  constructor() {
    super();
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        {users.map((user) => {
          return <p key={user.id}>{user.name}</p>;
        })}
      </div>
    );
  }
}

export default UserList;
