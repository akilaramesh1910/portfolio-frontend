import React, { Component } from "react";
import FullStackImage from "../../assests/images/program.svg";

export default class FullStackImg extends Component {
  render() {
    return (
      <img src={FullStackImage} alt="FullStack" width="480" height="500px" />
    );
  }
}
