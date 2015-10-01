
import React, { Component } from 'react';
import cn from 'classnames';

import SocialLink from '../SocialLink/SocialLink';

if (process.env.BROWSER) {
  require('./Footer.css');
}

export default class Footer extends Component {

  static contextTypes = {
    location: React.PropTypes.object
  };

  render() {
    const isHome = this.context.location.pathname === '/';
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

        <div className="Footer-credits">
          <p>Website entirely made by myself (design and code), you can look at the code on <a href="https://github.com/adriantoine/adriantoine.com">GitHub</a></p>
          <p>Background images are from <a href="https://unsplash.com/" target="_blank">Unsplash</a>, icons are from <a href="http://evil-icons.io/" target="_blank">Evil Icons</a>, fonts are from <a href="https://www.google.com/fonts" target="_blank">Google Web Fonts</a></p>
        </div>
      </footer>
    );
  }

}
