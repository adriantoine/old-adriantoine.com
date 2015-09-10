
import React, { Component } from 'react';
import Relay from 'react-relay';
import PostItem from '../PostItem/PostItem';

class PostsList extends Component {

  render() {
    return (
      <ul className="PostsList">
        {this.props.posts.edges.map(edge =>
          <PostItem key={ edge.node.id } post={ edge.node } />
        )}
      </ul>
    );
  }

}

export default Relay.createContainer(PostsList, {
  fragments: {
    posts: () => Relay.QL`
      fragment on PostConnection {
        edges {
          node {
            id,
            ${PostItem.getFragment('post')}
          }
        }
      }
    `,
  },
});
