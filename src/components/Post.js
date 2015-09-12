
import { createPost } from 'bloql/client';
import React, { Component } from 'react';

class Post extends Component {

  render() {
    return (
      <div className="Post">
        <h1>{this.props.post.meta.title}</h1>
        <div className="Post-content" dangerouslySetInnerHTML={{__html: this.props.post.content}}/>
      </div>
    );
  }

}

export default createPost(Post);
