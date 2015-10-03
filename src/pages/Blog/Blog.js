
import React, { Component } from 'react';
import cn from 'classnames';

import PostList from '../../components/PostList/PostList';
import Page from '../Page/Page';

if (process.env.BROWSER) {
  require('./Blog.css');
}

export default class Blog extends Component {
  render() {
    return (
      <Page className={cn('Blog', {'Page--no-hero': !!this.props.children})} title="Blog">
        {this.props.children || <PostList/>}
      </Page>
    );
  }
}
