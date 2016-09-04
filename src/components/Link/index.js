
import React from 'react';
import { navigate } from '../../router';

export default function Link(props) {
  function click(e) {
    e.preventDefault();
    navigate(props.to);
  }

  return (
    <a href={props.to} onClick={click} className={props.className}>
      {props.children}
    </a>
  );
}
