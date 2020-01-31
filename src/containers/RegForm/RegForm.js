import React, { Component } from "react";
import axios from "axios";
import  "./RegForm.css"
class RegForm extends Component {
  state = {
    name: "",
    email: "",
    contact: "",
    password: "",
    toggle: false
  };
  onChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
    //console.log(this.state.email);
  }

  onToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  storeReg = () => {
    const people = {
      name: this.state.name,
      email: this.state.email,
      contact: this.state.contact,
      password: this.state.password
    };
    axios
      .post("https://burger-builder-da849.firebaseio.com/reg.json", { people })
      .then(response => {
        // console.log(response.data);
      });
  };

  getData = () => {
    this.setState({ visible: false });
  };

  render() {
    let form = null;
    if (this.state.toggle) {
      form = (
        <form className="RegForm">
          <center>
            Name:
            <input  className="RegForm"
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={event => this.onChangeHandler(event)}
            />
            <br />
            <br />
            Email:
            <input  className="RegForm"
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={event => this.onChangeHandler(event)}
            />
            <br />
            <br />
            Contact:
            <input  className="RegForm"
              type="text"
              name="contact"
              placeholder="Your Number"
              onChange={event => this.onChangeHandler(event)}
            />
            <br />
            <br />
            Password:
            <input  className="RegForm"
              type="password"
              name="password"
              placeholder="Your password"
              onChange={event => this.onChangeHandler(event)}
            />
            <br />
            <br />
            <button onClick={this.storeReg} value="submit">
              Submit
            </button>
            <br />
          </center>
        </form>
      );
    }
    return (
      <div>
        <button onClick={this.onToggle}>Register</button>
        {form}
      </div>
    );
  }
}
export default RegForm;
