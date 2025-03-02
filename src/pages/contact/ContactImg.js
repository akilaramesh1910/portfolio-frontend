import React, { Component } from "react";
import ContactImage from "../../assests/images/message1.svg";

export default class ContactImg extends Component {
  render() {
    return (
      <img src={ContactImage} alt="Contact" width="550" />
    );
  }
}
