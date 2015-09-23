
import 'babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
let history = createBrowserHistory();

import App from './pages/App';

import AboutMe from './pages/AboutMe/AboutMe';
import Portfolio from './pages/Portfolio/Portfolio';
import { Blog, Post } from './pages/Blog/Blog';


ReactDOM.render(

  <Router history={history}>

    <Route path="/" component={App}>
      <Route path="about-me" component={AboutMe} />
      <Route path="portfolio" component={Portfolio} />
      <Route path="blog" component={Blog}>
         <Route path=":slug" component={Post} />
      </Route>
    </Route>

  </Router>,

  document.getElementById('app')
);
