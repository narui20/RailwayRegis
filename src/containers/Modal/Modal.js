import React, { Component } from "react";
import RegForm from "../RegForm/RegForm";

class Modal extends Component {
  render() {
    return (
      <div>
        <RegForm>
          <button onClick={!this.props.visible} />
        </RegForm>
      </div>
    );
  }
}
