
import React, { Component } from 'react';
import cn from 'classnames';

import Menu from './Menu/Menu';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import '../styles/base.css';
import './App.css';

export default class App extends Component {

  render() {
    const isHome = this.props.location.pathname === '/home';

    return (
      <div className={cn('App', {'App--no-background-image': !isHome})}>
        <Menu/>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }

}
