
import 'babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { RootContainer } from 'react-relay';
import Blog from './components/Blog';
import HomeRoutes from './routes/HomeRoutes';

ReactDOM.render(
  <RootContainer Component={ Blog } route={ new HomeRoutes() } />,
  document.getElementById('app')
);

export default Blog;
