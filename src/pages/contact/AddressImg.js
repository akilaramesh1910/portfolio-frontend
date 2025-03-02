import React, { Component } from "react";
import AddressImage from "../../assests/images/received.svg";

export default class AddressImg extends Component {
  render() {
    return (
      <img src={AddressImage} alt="Address" width="550" />
    );
  }
}
