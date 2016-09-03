
import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import cn from 'classnames';

import './Page.css';

export default class Page extends Component {

  render() {
    return (
      <div className={cn('Page', this.props.className)}>

        <div className="Page-hero">
          <h1>{this.props.title}</h1>
        </div>

        <DocumentTitle title={this.props.title}>
          <div className="Page-content">
            <div className="u-site-width">
              {this.props.children}
            </div>
          </div>
        </DocumentTitle>

      </div>
    );
  }

}
