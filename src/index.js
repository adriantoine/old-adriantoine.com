
import 'babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './components/Blog';
import Bloql from '../bloql/client';

ReactDOM.render(
  <Bloql.Root Component={ Blog } />,
  document.getElementById('app')
);

export default Blog;
