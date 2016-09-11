
import {h} from 'preact';

export default function Link(props, {navigate}) {
  function click(e) {
    e.preventDefault();
    history.pushState(null, '', props.to);
    navigate(props.to);
  }

  return (
    <a href={props.to} onClick={click} class={props.class}>
      {props.children}
    </a>
  );
}
