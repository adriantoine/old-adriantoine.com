
import React, { Component } from 'react';

if (process.env.BROWSER) {
  require('./SocialLink.css');
}

export default class SocialLink extends Component {

  render() {
    return (
      <a className={'SocialLink SocialLink-' + this.props.icon} href={this.props.link} target="_blank">
        <i className={'icon icon-' + this.props.icon}></i>
      </a>
    );
  }

}
