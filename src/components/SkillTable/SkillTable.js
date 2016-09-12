import {h} from 'preact';

import './SkillTable.css';

export function SkillTableItem(props) {
  return (
    <li class="SkillTable-item">
      <span class="SkillTable-item-icon" style={{backgroundImage: `url(${props.icon})`}}/>
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
