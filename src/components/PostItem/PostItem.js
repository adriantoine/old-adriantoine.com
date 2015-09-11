
import Bloql from 'bloql/client';

import React, { Component } from 'react';

class PostItem extends Component {

  render() {
    return (
      <li className="PostItem">
        { this.props.post.meta.title }
      </li>
    );
  }

}

export default Bloql.Post(PostItem);
