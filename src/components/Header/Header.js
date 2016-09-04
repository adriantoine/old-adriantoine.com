
import { h } from 'preact';

import Link from '../Link';
import cn from 'classnames';

import './Header.css';

function HeaderMenuLink(props) {
  return (
    <li class="Header-menu-item">
      <Link class="Header-menu-link" activeClassName="is-active" to={props.to}>
        {props.children}
      </Link>
    </li>
  );
}

export default function Header(props) {
  return (
    <header class={cn('Header', {'Header--no-background': props.isHome})}>

      <div class="u-site-width">

        <Link class="Header-title" to="/">Adrien Antoine</Link>
        <span class="Header-subtitle">front end developer</span>

        <nav class="Header-menu">
          <ul class="Header-menu-list">
            <HeaderMenuLink to="/about-me">About Me</HeaderMenuLink>
            <HeaderMenuLink to="/portfolio">Portfolio</HeaderMenuLink>
          </ul>
        </nav>

      </div>

    </header>
  );
}
