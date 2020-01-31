import React, { Component } from "react";
import Layout from "../src/components/Layout/Layout";
import { Switch, Route } from "react-router-dom";
import Booking from "../src/containers/Booking/Booking";
import SignIn from "../src/containers/SignIn/SignIn";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/booking" component={Booking} />
            <Route path="/" exact component={SignIn} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
