import React, {Component} from 'react'
import PropTypes from 'prop-types'

class EmailForm extends Component {
  render () {
    return (
      <form>
        <label>
          Email
        </label><br />
        <input type="text" />
      </form>
    )
  }
}

export default EmailForm;
