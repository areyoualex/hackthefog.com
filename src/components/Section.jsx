import React, {Component} from "react";
import {hot} from "react-hot-loader";

import './Section.scss';

class Section extends Component {
  render() {
    return (
      <section>
        <h3>{this.props.title.toUpperCase()}</h3>
        <div className="content">
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default hot(module)(Section);
