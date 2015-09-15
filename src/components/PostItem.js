
import React, { Component } from 'react';

export default class PostItem extends Component {

  render() {
    return (
      <li className="PostItem">
        { this.props.post.meta.title }
      </li>
    );
  }

}
