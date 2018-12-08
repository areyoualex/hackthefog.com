import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Button from "./Button";
import "./EmailForm.scss";

class EmailForm extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }
  submit(e) {
    e.preventDefault();
  };
  render () {
    return (
      <form onSubmit={this.submit} className="email-form">
        <label>
          EMAIL
        </label>
        <input type="text" />
        <Button type="submit">
          Akhbkhak
        </Button>
      </form>
    )
  }
}

export default EmailForm;
