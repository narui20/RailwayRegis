import React, { Component } from "react";
import axios from "axios";
import "./SignIn.css";

class SignIn extends Component {
  state = {
    name: "",
    password: "",
    user: [],
    toggle: true
  };

  onLoginHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.name);
  };

  onToggleHandler = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  onLoginClick = () => {
    console.log("inside login");
    let profiles = [];
    axios
      .get("https://burger-builder-da849.firebaseio.com/reg.json")
      .then(resp => {
        for (let i in resp.data) {
          profiles.push({
            ...resp.data[i]
          });
        }

        const data = profiles.map(ky => {
          console.log(Object.values(ky));
          console.log(ky);
          return Object.values(ky);
        });
        console.log(data);

        for (let i in data) {
          // console.log("Id found " + data[i][0].name);
          if (this.state.name === data[i][0].name) {
            //console.log("Hello  " + data[i][0].name);
            this.props.history.push("/booking");
            //alert("Hello"+data[i][0].name)
          }
        }
      });
  };

  render() {
    let form = null;
    if (this.state.toggle) {
      form = (
        <form className="SignIn">
          Name:
          <input
            className="SignIn"
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={event => this.onLoginHandler(event)}
          />
          <br />
          <br />
          Password:
          <input
            className="SignIn"
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={event => this.onLoginHandler(event)}
          />
          <br />
          <br />
          <button onClick={this.onLoginClick}>LogIn</button>
        </form>
      );
    }
    return (
      <div>
        <button onClick={this.onToggleHandler}>SignIn</button>
        {form}
      </div>
    );
  }
}
export default SignIn;
