
import React, { Component } from 'react';
import { RootContainer } from 'react-relay';

import Routes from './Routes';

class Root extends Component {

  render() {
    return (
      <RootContainer Component={ this.props.Component } route={ new Routes() }/>
    );
  }

}

export default Root;
