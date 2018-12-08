import React from 'react';

import "./Button.scss";

export default class Button extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    if (this.props.href) window.location.href = this.props.href;
    this.props.onClick();
  }
  render() {
    let type = this.props.type || "button";
    return (
      <button className="htf-button" onClick={this.onClick} type={type}>
        {this.props.children}
      </button>
    );
  }
}
