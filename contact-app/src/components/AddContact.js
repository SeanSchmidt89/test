import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Please enter your name and email.");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: ''});
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form onSubmit={this.add} className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              onChange={(e) => this.setState({ name: e.target.value })}
              value={this.state.name}
              type="text"
              name="name"
              placeholder="Name"
            ></input>
          </div>
          <div className="field">
            <label>Email</label>
            <input
              onChange={(e) => this.setState({ email: e.target.value })}
              value={this.state.email}
              type="text"
              name="email"
              placeholder="Email"
            ></input>
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
