
import React from 'react';
import DocumentTitle from 'react-document-title';
import cn from 'classnames';

import './Page.css';

export default function Page(props) {
  return (
    <div className={cn('Page', props.className)}>

      <div className="Page-hero">
        <h1>{props.title}</h1>
      </div>

      <DocumentTitle title={props.title}>
        <div className="Page-content">
          <div className="u-site-width">
            {props.children}
          </div>
        </div>
      </DocumentTitle>

    </div>
  );
}
