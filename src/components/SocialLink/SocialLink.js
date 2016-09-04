
import React from 'react';

import './SocialLink.css';

export default function SocialLink(props) {
  return (
    <a className={'SocialLink SocialLink-' + props.icon} href={props.link} target="_blank" rel="noopener noreferrer">
      <i className={'icon icon-' + props.icon}></i>
    </a>
  );
}
