import {h} from 'preact';
import Link from '../Link';
import './Button.css';

export default function Button(props) {
  return (
    <Link class="Button" to={props.to}>
      {props.children}
    </Link>
  );
}
