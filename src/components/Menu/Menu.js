
import {h, Component} from 'preact';
import cn from 'classnames';

import Link from '../Link';
import {shallowDiffers} from '../../utils';

import './Menu.css';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleIconClick = this.handleIconClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  shouldComponentUpdate(props, state) {
    return shallowDiffers(props, this.props) || shallowDiffers(state, this.state);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleDocumentClick.bind(this), false);
    document.addEventListener('touchstart', this.handleDocumentClick.bind(this), false);
  }

  handleDocumentClick(ev) {
    if (this.state.isOpen && !this.base.contains(ev.target)) {
      this.handleClose();
    }
  }

  handleClose() {
    this.setState({isOpen: false});
  }

  handleIconClick() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return (
      <nav class={cn('Menu', {'is-open': this.state.isOpen})}>

        <div class="Menu-icon" onClick={this.handleIconClick}/>

        <ul class="Menu-list">
          <li class="Menu-item"><Link class="Menu-link" onClick={this.handleClose} to="/about-me">About Me</Link></li>
          <li class="Menu-item"><Link class="Menu-link" onClick={this.handleClose} to="/portfolio">Portfolio</Link></li>
        </ul>
      </nav>
    );
  }

}
