import {h, render} from 'preact';
import Site from './site';

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install();
}

var defaultEl = document.getElementById('default');
defaultEl.innerHTML = '';

render(<Site />, document.body);
