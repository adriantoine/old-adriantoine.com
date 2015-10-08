
import { createComponent } from 'bloql/Post';
import React, { Component } from 'react';
import ReactDisqusThread from 'react-disqus-thread';
import DocumentTitle from 'react-document-title';
import moment from 'moment';

if (process.env.BROWSER) {
  require('./Post.css');
}

class Post extends Component {

  componentDidMount() {
    // Once the component is mounted, we can update the slug
    this.props.bloql.setSlug(this.props.params.slug);
  }

  renderDisqus() {
    // Render disqus only in production
    if (process.env.NODE_ENV === 'production') {
      return <ReactDisqusThread shortname="adriantoine" identifier={this.props.post.meta.slug} title={this.props.post.meta.title} />;
    }
  }

  render() {

    // If no post is in props, it means the component hasn't been initialised, so we should return an empty component
    if (!this.props.post) {
      return <article className="Post"/>;
    }

    return (
      <article className="Post">
        <DocumentTitle title={this.props.post.meta.title}/>

        <header className="Post-head">
          <h1 className="Post-title">{this.props.post.meta.title}</h1>
          <div className="Post-date">{moment(new Date(this.props.post.meta.date)).format('DD/MM/YYYY')}</div>
        </header>

        <div className="Post-content" dangerouslySetInnerHTML={{__html: this.props.post.content}}/>

        {this.renderDisqus()}

      </article>
    );

  }

}

export default createComponent(Post);
