
import React, { Component } from 'react';
import PostsList from './PostsList/PostsList';
import Bloql from '../../bloql/client';

class Blog extends Component {

  render() {
    return (
      <div className="Blog">
        <PostsList posts={ this.props.blog.posts } />
      </div>
    );
  }

}

export default Bloql.Blog(Blog, PostsList);
