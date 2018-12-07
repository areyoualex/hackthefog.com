import React, {Component} from "react";
import {hot} from "react-hot-loader";
import "./App.scss";

import Front from "./Front"

class App extends Component{
  render(){
    return(
      <div className="App">
        <Front />
      </div>
    );
  }
}

export default hot(module)(App);
