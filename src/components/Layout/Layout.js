import React, { Component } from "react";
import RegForm from "../../containers/RegForm/RegForm";
import SignIn from "../../containers/SignIn/SignIn";
import Booking from "../../containers/Booking/Booking";
class Layout extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 style={{ textAlign: "center", backgroundColor: "green" }}>
            Railway Register
          </h1>
        </div>
        <div>
          <RegForm />
        </div>
        <main>{this.props.children}</main>
        <div>Password</div>
        <div>Register</div>
      </div>
    );
  }
}
export default Layout;
