import React, {Component} from 'react';
import {hot} from "react-hot-loader";

import "./Footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
  componentDidMount() {
    const height = this.element.clientHeight;
    this.props.updateReceiver(height);
  }
  render() {
    return (
      <footer ref={ (elem)=>{this.element = elem;} }>
        <div className="social">
          <small>SOCIAL</small>
          <div className="social-icons">
            <IconLink href="https://www.instagram.com/hackthefog/"
              icon={['fab','instagram']} />
            <IconLink href="https://twitter.com/hackthefog"
              icon={['fab','twitter']} />
            <IconLink href="https://github.com/hackthefog"
              icon={['fab','github']} />
            <IconLink href="https://www.facebook.com/hackthefog/"
              icon={['fab','facebook']} />
            <IconLink href="mailto:contact@hackthefog.com"
              icon={'envelope'} />
          </div>
        </div>
        <a href="https://github.com/hackthefog/hackthefog.com">View source</a>
      </footer>
    );
  }
}

class IconLink extends Component {
  render() {
    return (
      <a href={this.props.href} className="icon-link">
        <FontAwesomeIcon icon={this.props.icon} />
      </a>
    );
  }
}

export default hot(module)(Footer);
