
import React, { Component } from 'react';
import cn from 'classnames';

import SocialLink from '../SocialLink/SocialLink';

import './Footer.css';

export default class Footer extends Component {

  static contextTypes = {
    location: React.PropTypes.object
  };

  render() {
    const isHome = this.context.location.pathname === '/home';
    return (
      <footer className={cn('Footer', {'Footer--fixed': isHome})}>
        <div className="Footer-socialLinks">
          <div className="u-site-width">
            <SocialLink icon="facebook" link="https://www.facebook.com/alshten"/>
            <SocialLink icon="twitter" link="https://twitter.com/adriantoine"/>
            <SocialLink icon="github" link="https://github.com/adriantoine"/>
            <SocialLink icon="tumblr" link="http://photo.adriantoine.com/"/>
            <SocialLink icon="linkedin" link="http://uk.linkedin.com/in/adriantoine/en"/>
            <SocialLink icon="google-plus"link="https://plus.google.com/+AdrienAntoine/"/>
          </div>
        </div>

        <ul className="Footer-credits">
          <li>Website entirely made by myself, you can look at the code on <a href="https://github.com/adriantoine/adriantoine.com">GitHub</a>, by the way, it is responsive :) </li>
        </ul>
      </footer>
    );
  }

}
