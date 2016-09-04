
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Link from '../Link';
import cn from 'classnames';

import './Menu.css';

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleDocumentClick.bind(this), false);
    document.addEventListener('touchstart', this.handleDocumentClick.bind(this), false);
  }

  handleDocumentClick(ev) {
    if (this.state.isOpen && !ReactDOM.findDOMNode(this).contains(ev.target)) {
      this.close();
    }
  }

  close() {
    this.setState({ isOpen: false });
  }

  onIconClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <nav className={cn('Menu', {'is-open': this.state.isOpen})}>

        <div className="Menu-icon" onClick={this.onIconClick.bind(this)}></div>

        <ul className="Menu-list">
          <li className="Menu-item"><Link className="Menu-link" onClick={this.close.bind(this)} to="/about-me">About Me</Link></li>
          <li className="Menu-item"><Link className="Menu-link" onClick={this.close.bind(this)} to="/portfolio">Portfolio</Link></li>
        </ul>
      </nav>
    );
  }

}
