import { Component } from "react";
import React from "react";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      users: [
        { id: Math.random().toString(), name: "bill" },
        { id: Math.random().toString(), name: "tim" },
        { id: Math.random().toString(), name: "cleater" },
      ],
      searchUser: "",
    };
  }

  inputChange = (event) => {
    //getting value, lowercasing it and saving it to state
    const searchUser = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchUser };
    });
  };

  render() {
    //filtering usersList vs searchUser list, saving in filteredUseres
    const filteredUsers = this.state.users.filter((user) =>
      user.name.toLocaleLowerCase().includes(this.state.searchUser)
    );

    //in return map over filtered list
    return (
      <div>
        <h1>HI</h1>
        <input
          onChange={this.inputChange}
          type="search"
          placeholder="Search User"
        />
        <button type="submit">Search</button>

        {filteredUsers.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    );
  }
}

export default Main;
