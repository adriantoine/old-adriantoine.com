
import React, { Component } from 'react';
import { Link } from 'react-router';

import './Button.css';

export default class Button extends Component {

  render() {
    return (
      <Link className="Button" to={this.props.to}>
        {this.props.children}
      </Link>
    );
  }

}
