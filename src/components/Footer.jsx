import React, {Component} from 'react';

import "./Footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="social">
          <small>SOCIAL</small>
          <div className="social-icons">
            // <FontAwesomeIcon icon="instagram" />
          </div>
        </div>
        <a href="https://github.com/hackthefog/hackthefog.com">View source</a>
      </footer>
    );
  }
}

export default Footer;
