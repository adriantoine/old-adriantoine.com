import {h, render} from 'preact';
import Site from './site';

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install();
}

render(<Site />, document.body);
