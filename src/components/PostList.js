
import { createPostList } from 'bloql/client';
import React, { Component } from 'react';
import PostItem from './PostItem';

class PostList extends Component {

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

export default createPostList(PostList, PostItem);
