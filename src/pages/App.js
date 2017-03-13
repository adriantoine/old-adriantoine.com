import {h} from 'preact';
import cn from 'classnames';

import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import '../styles/base.css';
import './App.css';

export default function App(props) {
  const isMain = window.location.pathname === '/';
  document.title = 'Adrien Antoine, front-end developer';

  return (
    <div class={cn('App', {'App--no-background-image': !isMain})}>
      <Menu />
      <Header transparent={isMain} />
      {props.children}
      <Footer transparent={isMain} />
    </div>
  );
}
