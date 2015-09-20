
import React, { Component } from 'react';

import './Menu.css';

export default class Menu extends Component {

  onIconClick() {
    console.log('click');
  }

  render() {
    return (
      <nav className="Menu">

        <div className="Menu-icon" onClick={this.onIconClick}></div>

        <ul className="Menu-list">
          <li className="Menu-item"><a className="Menu-link" href="/">Home</a></li>
          <li className="Menu-item"><a className="Menu-link" href="/">About Me</a></li>
          <li className="Menu-item"><a className="Menu-link" href="/">Portfolio</a></li>
          <li className="Menu-item"><a className="Menu-link" href="/">Blog</a></li>
          <li className="Menu-item"><a className="Menu-link" href="/">CV</a></li>
        </ul>
      </nav>
    );
  }

}
