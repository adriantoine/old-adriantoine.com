
import { createPost } from 'bloql/client';
import React, { Component } from 'react';
import ReactDisqusThread from 'react-disqus-thread';
import DocumentTitle from 'react-document-title';
import moment from 'moment';

if (process.env.BROWSER) {
  require('./Post.css');
}

class Post extends Component {

  render() {
    return (
      <article className="Post">
        <DocumentTitle title={this.props.post.meta.title}/>

        <header className="Post-head">
          <h1 className="Post-title">{this.props.post.meta.title}</h1>
          <div className="Post-date">{moment(new Date(this.props.post.meta.date)).format('DD/MM/YYYY')}</div>
        </header>

        <div className="Post-content" dangerouslySetInnerHTML={{__html: this.props.post.content}}/>

        <ReactDisqusThread shortname="adriantoine" identifier={this.props.post.meta.slug} title={this.props.post.meta.title} />

      </article>

    );
  }

}

export default createPost(Post);
