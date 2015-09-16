
import React, { Component } from 'react';

import Button from '../../Button/Button';
import { Link } from 'react-router';

import './Home.css';

export default class Body extends Component {

  render() {
    return (
      <div className="Home">

        <h1>Adrien Antoine, front end developer</h1>

        <div className="u-site-width">
          <div className="Home-hero">
            <div className="Home-hero-title">Hi, My name is <span className="u-blue">Adrien Antoine</span></div>
            <div className="Home-hero-description">
              I am a <b>front end developer</b> with <b>3 years of experience</b>. <a className="u-blue" href="https://github.com/adriantoine" target="_blank">Active on Github</a> and <b>passionate about technologies</b>, I also have <b>commercial experience in various technologies</b>.
            </div>
          </div>

          <div className="Home-buttons">
            <Link className="Button" to="about-me">About Me</Link>
            <Button>Portfolio</Button>
            <Button>Blog</Button>
            <Button>CV</Button>
          </div>

        </div>

      </div>
    );
  }

}
