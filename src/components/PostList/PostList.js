
import { createComponent } from 'bloql/PostList';
import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

if (process.env.BROWSER) {
  require('./PostList.css');
}

class PostList extends Component {

  static postCount = 10;

  renderPostItem(meta) {
    return (
      <li className="PostItem">
        <h2><Link className="PostItem-title" to={'/blog/' + meta.slug}>{ meta.title }</Link></h2>
        <div className="PostItem-meta">
          <span className="PostItem-date">{moment(new Date(meta.date)).format('DD/MM/YYYY')}</span>
        </div>
      </li>
    );
  }

  render() {
    return (
      <ul className="PostList">
        {this.props.posts.edges.map(edge =>
          this.renderPostItem(edge.node.meta)
        )}
      </ul>
    );
  }

}

export default createComponent(PostList);
