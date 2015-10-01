
import { createPost } from 'bloql/client';
import React, { Component } from 'react';
import moment from 'moment';

if (process.env.BROWSER) {
  require('./Post.css');
}

class Post extends Component {

  render() {
    return (
      <article className="Post">

        <header className="Post-head">
          <h1 className="Post-title">{this.props.post.meta.title}</h1>
          <div className="Post-date">{moment(this.props.post.meta.date).format('DD/MM/YYYY')}</div>
        </header>

        <div className="Post-content" dangerouslySetInnerHTML={{__html: this.props.post.content}}/>

      </article>
    );
  }

}

export default createPost(Post);
