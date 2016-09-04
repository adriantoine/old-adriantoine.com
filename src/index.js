
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import App from './pages/App';
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Portfolio from './pages/Portfolio/Portfolio';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about-me" component={AboutMe} />
      <Route path="portfolio" component={Portfolio} />
    </Route>
  </Router>,
  document.getElementById('app')
);
