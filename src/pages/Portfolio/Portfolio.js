import React from 'react';
import Page from '../Page/Page';

import './Portfolio.css';

export default function Portfolio() {
  return (
    <Page className="Portfolio" title="Portfolio">

      <div className="Portfolio-comingSoon">Coming Soon...</div>
      <div className="Portfolio-fallback">
        For now you can still look at my Github profile: <a href="https://github.com/adriantoine/">https://github.com/adriantoine/</a>
      </div>

    </Page>
  );
}
