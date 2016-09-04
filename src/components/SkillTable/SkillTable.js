
import React from 'react';
import cn from 'classnames';

import './SkillTable.css';

export function SkillTableItem(props) {
  return (
    <li className={cn('SkillTable-item', props.icon)}>
      {props.children}
    </li>
  );
}

function renderTitle(title) {
  if (title) {
    return (
      <div className="SkillTable-title">
        {title}
      </div>
    );
  }
}

export function SkillTable(props) {
  return (
    <div className="SkillTable">
      {renderTitle(props.title)}
      <ul className="SkillTable-content">
        {props.children}
      </ul>
    </div>
  );
}
