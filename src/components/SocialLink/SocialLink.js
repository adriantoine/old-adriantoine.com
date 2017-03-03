import {h} from 'preact';

import './SocialLink.css';

export default function SocialLink(props) {
  return (
    <a
      class={'SocialLink SocialLink-' + props.icon}
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class={'icon icon-' + props.icon} />
      <span class="SocialLink-text">{props.children}</span>
    </a>
  );
}
