
import 'babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import PostList from './components/PostList';

ReactDOM.render(
  <PostList />,
  document.getElementById('app')
);
