import React, { Component } from "react";

class Booking extends Component {
  render() {
    let form = (
      <form>
        <select>
          <option value="Chennai">Chennai</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Kolkata">Kolkata</option>
        </select>
      </form>
    );
    return <div>{form}</div>;
  }
}
export default Booking;
