
import React from 'react';

import Link from '../Link';
import cn from 'classnames';

import './Header.css';

function HeaderMenuLink(props) {
  return (
    <li className="Header-menu-item">
      <Link className="Header-menu-link" activeClassName="is-active" to={props.to}>
        {props.children}
      </Link>
    </li>
  );
}

export default function Header(props) {
  return (
    <header className={cn('Header', {'Header--no-background': props.isHome})}>

      <div className="u-site-width">

        <Link className="Header-title" to="/">Adrien Antoine</Link>
        <span className="Header-subtitle">front end developer</span>

        <nav className="Header-menu">
          <ul className="Header-menu-list">
            <HeaderMenuLink to="/about-me">About Me</HeaderMenuLink>
            <HeaderMenuLink to="/portfolio">Portfolio</HeaderMenuLink>
          </ul>
        </nav>

      </div>

    </header>
  );
}
