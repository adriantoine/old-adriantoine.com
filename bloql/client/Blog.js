
import Relay from 'react-relay';

export default function (Blog, PostsList) {
  return Relay.createContainer(Blog, {

    fragments: {
      blog: () => Relay.QL`
        fragment on Blog {
          posts(first:10) {
            ${PostsList.getFragment('posts')}
          }
        }
      `,
    },

  });
}
