import React from 'react';
import {hot} from "react-hot-loader";

import "./Article.scss";

class Article extends React.Component {
  render() {
    return (
      <a href={this.props.href}>
        <div className="article">
          <div>
            <p>{this.props.title}</p>
            <span>{this.props.date}</span>
          </div>
          <img src={this.props.imgSrc} />
          <span>
            {this.props.shortlink}
          </span>
        </div>
      </a>
    );
  }
}

export default hot(module)(Article);
