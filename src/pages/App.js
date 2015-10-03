
import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import cn from 'classnames';

import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

if (process.env.BROWSER) {
  require('../styles/base.css');
  require('./App.css');
}

export default class App extends Component {

  render() {
    const isHome = this.props.location.pathname === '/';

    return (
      <div className={cn('App', {'App--no-background-image': !isHome})}>


        <Menu/>
        <Header/>
        <DocumentTitle title='Adrien Antoine, front-end developer'>
          {this.props.children}
        </DocumentTitle>
        <Footer/>
      </div>
    );
  }

}
