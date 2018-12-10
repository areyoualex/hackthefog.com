import React, {Component} from "react";
import {hot} from "react-hot-loader";

import "./Front.scss";
import logo from "../img/logo.png";
import bg from "../img/front-collage.png";

class Front extends Component {
  render() {
    return (
      <div className="front">
        <a href="#">
          <h1>Hack the Fog</h1>
        </a>
        <img src={logo}></img>
        <h2>where coding is your superpower.</h2>
        <div>
          <p>MARCH 2019</p>
          <p>APPLICATIONS OPENING SOON</p>
        </div>
      </div>
    );
  }
}

export default hot(module)(Front);
