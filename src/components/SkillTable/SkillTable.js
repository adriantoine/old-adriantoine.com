
import { h } from 'preact';
import cn from 'classnames';

import './SkillTable.css';

export function SkillTableItem(props) {
  return (
    <li class={cn('SkillTable-item', props.icon)}>
      {props.children}
    </li>
  );
}

function renderTitle(title) {
  if (title) {
    return (
      <div class="SkillTable-title">
        {title}
      </div>
    );
  }
}

export function SkillTable(props) {
  return (
    <div class="SkillTable">
      {renderTitle(props.title)}
      <ul class="SkillTable-content">
        {props.children}
      </ul>
    </div>
  );
}
