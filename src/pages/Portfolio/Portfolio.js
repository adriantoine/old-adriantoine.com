import {h} from 'preact';
import Page from '../Page/Page';

import './Portfolio.css';

export default function Portfolio() {
  return (
    <Page class="Portfolio" title="Portfolio">

      <div class="Portfolio-comingSoon">Coming Soon...</div>
      <div class="Portfolio-fallback">
        For now you can look at my Github profile: <a href="https://github.com/adriantoine/">https://github.com/adriantoine/</a>
      </div>

    </Page>
  );
}
