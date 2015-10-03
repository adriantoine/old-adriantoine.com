import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './pages/App';

import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Portfolio from './pages/Portfolio/Portfolio';
import Blog from './pages/Blog/Blog';
import Post from './pages/Post/Post';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="about-me" component={AboutMe} />
    <Route path="portfolio" component={Portfolio} />
    <Route path="blog" component={Blog}>
       <Route path=":slug" component={Post} />
    </Route>
  </Route>
);
