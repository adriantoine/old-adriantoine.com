
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-enroute';

import App from './pages/App';
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Portfolio from './pages/Portfolio/Portfolio';

const decorate = Decorator => Component => {
  const Decorated = props => {
    return (
      <Decorator {...props}>
        <Component {...props}/>
      </Decorator>
    );
  };
  return Decorated;
};

window.addEventListener('popstate', () => {
  render();
});

export const navigate = path => {
  history.pushState(null, '', path);
  render();
};


const AppHome = decorate(App)(Home);
const AppAboutMe = decorate(App)(AboutMe);
const AppPortfolio = decorate(App)(Portfolio);

export const render = () => {
  ReactDOM.render(
    <Router location={window.location.pathname}>
      <Route path="/" component={AppHome}/>
      <Route path="/about-me" component={AppAboutMe}/>
      <Route path="/portfolio" component={AppPortfolio}/>
    </Router>,
    document.getElementById('app')
  );
};
