
import 'babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Bloql from 'bloql/client';

import PostsList from './components/PostsList/PostsList';

ReactDOM.render(
  <Bloql PostsList={ PostsList } />,
  document.getElementById('app')
);
