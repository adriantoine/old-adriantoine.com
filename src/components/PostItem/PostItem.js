
import React, { Component } from 'react';
import Relay from 'react-relay';

class PostItem extends Component {

  render() {
    return (
      <li className="PostItem">
        { this.props.post.meta.title }
      </li>
    );
  }

}

export default Relay.createContainer(PostItem, {
  fragments: {
    post: () => Relay.QL`
      fragment on Post {
        meta {
          title
          slug
          date
          categories
          tags
        }
      }
    `,
  },
});
