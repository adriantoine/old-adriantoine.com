
import React, { Component } from 'react';
import { Router, Route } from 'react-router';

import './Body.css';
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';

export default class Body extends Component {

  render() {
    return (
      <div className="Body">
        <Router>
          <Route path="/" component={ Home }/>
          <Route path="about-me" component={ AboutMe }/>
        </Router>
      </div>
    );
  }

}
