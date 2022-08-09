import React from "react";
import { Component } from "react";
import UserList from "./components/UserList";
import Search from "./components/Search";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [
        {
          id: Math.random().toString(),
          name: "Sean",
        },
        {
          id: Math.random().toString(),
          name: "Timmy",
        },
        {
          id: Math.random().toString(),
          name: "Fred",
        },
      ],
      searchList: "",
    };
  }

  onSearchHandler = (event) => {
    const searchList = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchList };
    });
  };

  render() {
    const filteredList = this.state.users.filter((user) => {
      return user.name.toLocaleLowerCase().includes(this.state.searchList);
    });

    return (
      <div className="App">
        <Search onChangeHandler={this.onSearchHandler} placeholder='Search User'/>
        <UserList users={filteredList} />
      </div>
    );
  }
}

export default App;
