
import React, { Component } from 'react';
import Button from '../../components/Button/Button';

import './Home.css';

export default class Body extends Component {

  render() {
    return (
      <div className="Home Page">

        <div className="u-site-width">
          <div className="Home-hero">
            <div className="Home-hero-title">Hi, My name is <span className="u-blue">Adrien Antoine</span></div>
            <div className="Home-hero-description">
              I am a <b>front end developer</b> with <b>3 years of experience</b>. <a className="u-blue" href="https://github.com/adriantoine" target="_blank">Active on Github</a> and <b>passionate about technologies</b>, I also have <b>commercial experience in various technologies</b>.
            </div>
          </div>

          <div className="Home-buttons">
            <Button to="/about-me">About Me</Button>
            <Button to="/portfolio">Portfolio</Button>
            <Button to="/blog">Blog</Button>
          </div>

        </div>

      </div>
    );
  }

}