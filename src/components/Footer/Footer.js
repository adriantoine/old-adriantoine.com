import {h} from 'preact';
import cn from 'classnames';
import './Footer.css';

import SocialLink from '../SocialLink/SocialLink';

export default function Footer(props) {
  return (
    <footer class={cn('Footer', {'Footer--fixed': props.isHome})}>
      <div class="Footer-socialLinks">
        <div class="u-site-width">
          <SocialLink icon="facebook" link="https://www.facebook.com/alshten">Facebook</SocialLink>
          <SocialLink icon="twitter" link="https://twitter.com/adriantoine">Twitter</SocialLink>
          <SocialLink icon="github" link="https://github.com/adriantoine">GitHub</SocialLink>
          <SocialLink icon="tumblr" link="http://photo.adriantoine.com/">Tumblr</SocialLink>
          <SocialLink icon="linkedin" link="http://uk.linkedin.com/in/adriantoine/en">
            LinkedIn
          </SocialLink>
          <SocialLink icon="google-plus" link="https://plus.google.com/+AdrienAntoine/">
            Google Plus
          </SocialLink>
        </div>
      </div>
      <div class="Footer-credits">
        <p>
          Website entirely made by myself (design and code), you can look at the code on{' '}
          <a href="https://github.com/adriantoine/adriantoine.com">GitHub</a>
        </p>
        <p>
          Background images are from{' '}
          <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">
            Unsplash
          </a>
          , icons are from{' '}
          <a href="http://evil-icons.io/" target="_blank" rel="noopener noreferrer">
            Evil Icons
          </a>
        </p>
      </div>
    </footer>
  );
}
