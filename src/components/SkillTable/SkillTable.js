
import React, { Component } from 'react';
import cn from 'classnames';

if (process.env.BROWSER) {
  require('./SkillTable.css');
}

export class SkillTableItem extends Component {
  render() {
    return (
      <li className={cn('SkillTable-item', this.props.icon)}>
        {this.props.children}
      </li>
    );
  }
}

export class SkillTable extends Component {

  renderTitle() {
    if (this.props.title) {
      return (
        <div className="SkillTable-title">
          {this.props.title}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="SkillTable">
        {this.renderTitle()}
        <ul className="SkillTable-content">
          {this.props.children}
        </ul>
      </div>
    );
  }
}
