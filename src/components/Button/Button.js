
import React from 'react';
import Link from '../Link';
import './Button.css';

export default function Button(props) {
  return (
    <Link className="Button" to={props.to}>
      {props.children}
    </Link>
  );
}
