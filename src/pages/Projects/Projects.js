import {h} from 'preact';
import Page from '../Page/Page';

import './Projects.css';

export default function Projects() {
  return (
    <Page class="Projects" title="Projects">
      <div class="Projects-comingSoon">Coming Soon...</div>
      <div class="Projects-fallback">
        For now you can look at my Github profile:{' '}
        <a href="https://github.com/adriantoine/">
          https://github.com/adriantoine/
        </a>
      </div>
    </Page>
  );
}
