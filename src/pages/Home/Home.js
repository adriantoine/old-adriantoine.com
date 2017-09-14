import {h} from 'preact';
import './Home.css';

import SiteWidth from '../../components/SiteWidth';
import TwitterLogo from '../../icons/twitter.svg';
import GitHubLogo from '../../icons/github.svg';
import LinkInLogo from '../../icons/linkedin.svg';

export default function Home({onScrollToMore}) {
  return (
    <div class="Home">
      <SiteWidth>
        <div class="Home-hero">
          <div class="Home-hero-title">
            <span class="u-purple">Hi!</span> My name is{' '}
            <span class="u-blue">Adrien Antoine</span>.
          </div>
          <div class="Home-hero-description">
            I am a <strong class="u-green">front end developer</strong> with{' '}
            <strong class="u-orange">7 years of experience</strong>
            .{' '}
            <a
              class="u-blue"
              href="https://github.com/adriantoine"
              target="_blank"
              rel="noopener noreferrer"
            >
              Active on Github
            </a>{' '}
            and <strong class="u-purple">passionate about technologies</strong>
            , I also have{' '}
            <strong class="u-orange">commercial experience</strong> in
            <strong class="u-green">various technologies</strong>
            .
          </div>
          <div class="Home-socialLinks">
            <a
              class="Home-socialLink Home-socialLink--twitter"
              href="https://twitter.com/adriantoine"
              target="_blank"
              rel="noopener noreferrer"
              dangerouslySetInnerHTML={{__html: TwitterLogo}}
            />
            <a
              class="Home-socialLink Home-socialLink--github"
              href="https://github.com/adriantoine"
              target="_blank"
              rel="noopener noreferrer"
              dangerouslySetInnerHTML={{__html: GitHubLogo}}
            />
            <a
              class="Home-socialLink Home-socialLink--linkedin"
              href="https://www.linkedin.com/in/adriantoine"
              target="_blank"
              rel="noopener noreferrer"
              dangerouslySetInnerHTML={{__html: LinkInLogo}}
            />
          </div>
        </div>
      </SiteWidth>
      <div
        role="button"
        class="Home-moreAbout"
        onClick={onScrollToMore}
        onKeyPress={onScrollToMore}
        tabIndex={0}
      >
        <span class="Home-moreAbout-text">About me</span>
        <div class="Home-moreAbout-arrow" />
      </div>
    </div>
  );
}
