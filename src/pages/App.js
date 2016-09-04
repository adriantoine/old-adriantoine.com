
import React from 'react';
import DocumentTitle from 'react-document-title';
import cn from 'classnames';

import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import '../styles/base.css';
import './App.css';

export default function App(props) {
  const isHome = props.location.pathname === '/';

  return (
    <div className={cn('App', {'App--no-background-image': !isHome})}>
      <Menu/>
      <Header location={props.location}/>
      <DocumentTitle title='Adrien Antoine, front-end developer'>
        {props.children}
      </DocumentTitle>
      <Footer location={props.location}/>
    </div>
  );
}
