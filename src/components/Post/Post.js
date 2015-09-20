
import { createPost } from 'bloql/client';
import React, { Component } from 'react';

class Post extends Component {

  render() {
    console.log(this.props.post.meta);
    return (
      <div className="Post">
        <h2>{this.props.post.meta.title}</h2>
        <div className="Post-content" dangerouslySetInnerHTML={{__html: this.props.post.content}}/>
      </div>
    );
  }

}

export default createPost(Post);
