
import { createPostList } from 'bloql/client';
import React, { Component } from 'react';
import { Link } from 'react-router';

import './PostList.css';

class PostList extends Component {

  static postCount = 10;

  render() {
    return (
      <ul className="PostList">
        {this.props.posts.edges.map(edge =>
          <li className="PostItem">
            <Link to={'/blog/post/' + edge.node.meta.slug}>{ edge.node.meta.title }</Link>
          </li>
        )}
      </ul>
    );
  }

}

export default createPostList(PostList);
