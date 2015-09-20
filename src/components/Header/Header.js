
import React, { Component } from 'react';
import { Link } from 'react-router';
import cn from 'classnames';

import './Header.css';

class HeaderMenuLink extends Component {
  render() {
    return (
      <li className="Header-menu-item">
        <Link className="Header-menu-link" activeClassName="is-active" to={this.props.to}>
          {this.props.children}
        </Link>
      </li>
    );
  }
}

export default class Header extends Component {

  static contextTypes = {
    location: React.PropTypes.object
  };

  render() {
    const isHome = this.context.location.pathname === '/home';

    return (
      <header className={cn('Header', {'Header--no-background': isHome})}>

        <div className="u-site-width">

          <Link className="Header-title" to="/">Adrien Antoine</Link>
          <span className="Header-subtitle">front end developer</span>

          <nav className="Header-menu">
            <ul className="Header-menu-list">
              <HeaderMenuLink to="/home">Home</HeaderMenuLink>
              <HeaderMenuLink to="/about-me">About Me</HeaderMenuLink>
              <HeaderMenuLink to="/portfolio">Portfolio</HeaderMenuLink>
              <HeaderMenuLink to="/blog">Blog</HeaderMenuLink>
              <HeaderMenuLink to="/cv">CV</HeaderMenuLink>
            </ul>
          </nav>

        </div>

      </header>
    );
  }

}
