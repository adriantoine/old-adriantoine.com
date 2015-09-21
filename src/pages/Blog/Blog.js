
import React, { Component } from 'react';
import PostList from '../../components/PostList/PostList';
import PostComponent from '../../components/Post/Post';

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
      <div className="Blog Page">
        {this.props.children || (

          <div className="Blog-home">

            <div className="Hero">
              <h1>Blog</h1>
            </div>

            <div className="u-site-width">
              <PostList/>
            </div>

          </div>

        )}
      </div>
    );
  }
}
