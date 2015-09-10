
import Relay from 'react-relay';

export default class extends Relay.Route {

  static queries = {
    blog: () => Relay.QL`query RootQuery { blog }`,
  };

  static routeName = 'HomeRoute';

}
