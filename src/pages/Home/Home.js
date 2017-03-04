import {h} from 'preact';
import Button from '../../components/Button/Button';
import './Home.css';

export default function Home() {
  return (
    <div class="Home Page">
      <div class="u-site-width">
        <div class="Home-hero">
          <div class="Home-hero-title">
            Hi, My name is <span class="u-blue">Adrien Antoine</span>
          </div>
          <div class="Home-hero-description">
            I am a{' '}
            <strong>front end developer</strong>
            {' '}with{' '}
            <strong>6 years of experience</strong>
            .{' '}
            <a
              class="u-blue"
              href="https://github.com/adriantoine"
              target="_blank"
              rel="noopener noreferrer"
            >
              Active on Github
            </a>
            {' '}and{' '}
            <strong>passionate about technologies</strong>
            , I also have{' '}
            <strong>commercial experience in various technologies</strong>
            .
          </div>
        </div>
        <div class="Home-buttons">
          <Button to="/about-me">About Me</Button>
          <Button to="/portfolio">Portfolio</Button>
        </div>
      </div>
    </div>
  );
}
