
import 'babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect } from 'react-router';

import App from './components/App';

import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Portfolio from './pages/Portfolio/Portfolio';
import { Blog, Post } from './pages/Blog/Blog';
import Cv from './pages/Cv/Cv';

ReactDOM.render(

  <Router>

    <Redirect from="/" to="/home"/>

    <Route path="/" component={App}>
      <Route path="home" component={Home} />
      <Route path="about-me" component={AboutMe} />
      <Route path="portfolio" component={Portfolio} />
      <Route path="blog" component={Blog}>
         <Route path="post/:slug" component={Post} />
      </Route>
      <Route path="cv" component={Cv} />
    </Route>

  </Router>,

  document.getElementById('app')
);

// import Post from './components/Post';

// ReactDOM.render(
//   <Post slug="typographic-work-planner" />,
//   document.getElementById('app')
// );
