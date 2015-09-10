
import React, { Component } from 'react';
import Relay from 'react-relay';
import PostsList from './PostsList/PostsList';

class Blog extends Component {

  render() {
    return (
      <div className="Blog">
        <PostsList posts={ this.props.blog.posts } />
      </div>
    );
  }

}

export default Relay.createContainer(Blog, {

  initialVariables: {
    postsNumber: 10
  },

  fragments: {
    blog: () => Relay.QL`
      fragment on Blog {
        posts(first: $postsNumber) {
          ${PostsList.getFragment('posts')}
        }
      }
    `,
  },

});
