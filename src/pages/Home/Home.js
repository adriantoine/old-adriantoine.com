
import { h } from 'preact';
import Button from '../../components/Button/Button';
import './Home.css';

export default function Home() {
  return (
    <div class="Home Page">

      <div class="u-site-width">
        <div class="Home-hero">
          <div class="Home-hero-title">Hi, My name is <span class="u-blue">Adrien Antoine</span></div>
          <div class="Home-hero-description">
            I am a <b>front end developer</b> with <b>3 years of experience</b>. <a class="u-blue" href="https://github.com/adriantoine" target="_blank" rel="noopener noreferrer">Active on Github</a> and <b>passionate about technologies</b>, I also have <b>commercial experience in various technologies</b>.
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
