import {h, Component} from 'preact';

import '../styles/base.css';
import './App.css';
import scroll from 'scroll';
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.scrollToMore = this.scrollToMore.bind(this);
  }

  scrollToMore() {
    scroll.top(this.app, this.about.getBoundingClientRect().top);
  }

  render() {
    document.title = 'Adrien Antoine, front-end developer';

    return (
      <div class="App" ref={c => (this.app = c)}>
        <Home onScrollToMore={this.scrollToMore} />
        <div ref={c => (this.about = c)}>
          <AboutMe />
        </div>
      </div>
    );
  }
}
