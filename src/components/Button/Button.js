
import React from 'react';
import { Link } from 'react-router';
import './Button.css';

export default function Button(props) {
  return (
    <Link className="Button" to={props.to}>
      {props.children}
    </Link>
  );
}
