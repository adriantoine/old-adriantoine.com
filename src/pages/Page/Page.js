
import { h } from 'preact';
import cn from 'classnames';

import './Page.css';

export default function Page(props) {
  document.title = props.title;
  return (
    <div class={cn('Page', props.class)}>

      <div class="Page-hero">
        <h1>{props.title}</h1>
      </div>

      <div class="Page-content">
        <div class="u-site-width">
          {props.children}
        </div>
      </div>

    </div>
  );
}
