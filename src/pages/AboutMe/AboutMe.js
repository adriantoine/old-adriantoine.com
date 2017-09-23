import {h} from 'preact';
import twemoji from 'twemoji';

import './AboutMe.css';

function emoji(code) {
  return (
    <span
      class="u-emoji"
      dangerouslySetInnerHTML={{__html: twemoji.parse(code)}}
    />
  );
}

export default function AboutMe() {
  return (
    <div class="AboutMe">
      <div class="AboutMe-content">
        <h2>Who am I?</h2>
        <p>
          I am a front-end developer living in London (UK) with 7 years of
          experience using various tools and frameworks.
        </p>
        <p>
          I am passionate about web technologies and I love to experient things
          on my free time, trying out new frameworks, methods, tools, libraries
          and even languages sometimes. I am{' '}
          <a
            href="https://github.com/adriantoine"
            target="_blank"
            rel="noopener noreferrer"
          >
            active on Github
          </a>{' '}
          and trying to contribute as much as I can as well as to maintain my
          own repos.
        </p>
        <h2>What do I do?</h2>
        <p>
          I have worked on several different projects, you can find more info
          about my commercial experience on{' '}
          <a
            href="https://www.linkedin.com/in/adriantoine/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            my LinkedIn profile
          </a>{' '}
          and about my personal projects and involvment in open source projects
          on{' '}
          <a
            href="https://github.com/adriantoine"
            target="_blank"
            rel="noopener noreferrer"
          >
            my Github profile
          </a>
          .
        </p>
        <h2>How do I do it?</h2>
        <p>
          As a front-end developer, I am good at writing clean and structured
          code, refactoring old code and setting up an architecture for a new
          project. I am usually appreciated for my clean, organised and
          well-documented code.
        </p>
      </div>
      <div class="AboutMe-content">
        <p>
          And I also have experience on personal projects using these tools, and
          I'm quite excited about them.
        </p>
        <h2>What else should you know about me?</h2>
        <p>
          A good thing to know about me is that I am French{' '}
          {emoji('\uD83D\uDE0B')} so I obviously like cheese and wine. Then I
          love travelling and{' '}
          <a
            href="https://www.flickr.com/people/adriantoine/"
            target="_blank"
            rel="noopener noreferrer"
          >
            taking photos
          </a>
          , I'm also a big fan of cinema and enjoy going out in London in
          general {emoji('\uD83D\uDE0A')}
          .
        </p>
        <h2>How to contact me?</h2>
        <p>
          If you want to get in touch for a job, I prefer if you{' '}
          <a
            href="https://www.linkedin.com/in/adriantoine/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            send me a message on LinkedIn
          </a>
          . For anything else, please contact me{' '}
          <a href="mailto:adriantoine@gmail.com">on my personal email</a> or{' '}
          <a
            href="https://twitter.com/adriantoine"
            target="_blank"
            rel="noopener noreferrer"
          >
            send me a tweet
          </a>
          .
        </p>
      </div>
    </div>
  );
}
