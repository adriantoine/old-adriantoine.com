
import React, { Component } from 'react';
import cn from 'classnames';

import Menu from '../components/Menu/Menu';
import Home from './Home/Home';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import '../styles/base.css';
import './App.css';

export default class App extends Component {

  render() {
    const isHome = this.props.location.pathname === '/';

    return (
      <div className={cn('App', {'App--no-background-image': !isHome})}>
        <Menu/>
        <Header/>
        {this.props.children || <Home/>}
        <Footer/>
      </div>
    );
  }

}
