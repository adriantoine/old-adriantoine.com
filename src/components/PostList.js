
import { createPostList } from 'bloql/client';
import React, { Component } from 'react';
import PostItem from './PostItem';

class PostList extends Component {

  static postCount = 20;
  static startDate = '2010-03-02';
  static endDate = '2010-08-10';

  render() {
    return (
      <ul className="PostList">
        {this.props.posts.edges.map(edge =>
          <PostItem key={ edge.node.id } post={ edge.node } />
        )}
      </ul>
    );
  }

}

export default createPostList(PostList);
