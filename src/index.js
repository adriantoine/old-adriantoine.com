
import 'babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
// import createBrowserHistory from 'history/lib/createBrowserHistory';
// let history = createBrowserHistory();

import routes from './routes';

ReactDOM.render(
  <Router routes={routes}/>,
  document.getElementById('app')
);
