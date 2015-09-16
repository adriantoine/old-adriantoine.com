
import React, { Component } from 'react';

import './Header.css';

export default class Header extends Component {

  render() {
    return (
      <header className="Header">

        <div id="menu-link" className="Header-hamburger">
          <i className="icon icon-bars"></i>
        </div>

        <div className="u-site-width">

          <a className="Header-title" href="/">Adrien Antoine</a>
          <span className="Header-subtitle">front end developer</span>

          <nav className="Header-menu">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">About Me</a></li>
              <li><a href="/">Portfolio</a></li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">CV</a></li>
            </ul>
          </nav>

        </div>

      </header>
    );
  }

}
