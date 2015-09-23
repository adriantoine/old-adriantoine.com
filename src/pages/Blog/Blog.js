
import React, { Component } from 'react';
import cn from 'classnames';

import PostList from '../../components/PostList/PostList';
import PostComponent from '../../components/Post/Post';
import Page from '../Page/Page';

import './Blog.css';

export class Post extends Component {
  render() {
    return (
      <PostComponent slug={this.props.params.slug}/>
    );
  }
}

export class Blog extends Component {
  render() {
    return (
      <Page className={cn('Blog', {'Page--no-hero': !!this.props.children})} title="Blog">
        {this.props.children || <PostList/>}
      </Page>
    );
  }
}
