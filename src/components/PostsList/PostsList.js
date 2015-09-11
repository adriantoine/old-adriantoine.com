
import Bloql from 'bloql/client';
import React, { Component } from 'react';
import PostItem from '../PostItem/PostItem';

class PostsList extends Component {

  render() {
    return (
      <ul className="PostsList">
        {this.props.posts.edges.map(edge =>
          <PostItem key={ edge.node.id } post={ edge.node } />
        )}
      </ul>
    );
  }

}

export default Bloql.PostsList(PostsList, PostItem);
