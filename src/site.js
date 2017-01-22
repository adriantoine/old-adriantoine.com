import {h, Component} from 'preact';
import {Router, Route} from 'preact-enroute';

import App from './pages/App';
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Portfolio from './pages/Portfolio/Portfolio';

const decorate = Decorator => Comp => {
  const Decorated = props => {
    return (
      <Decorator {...props}>
        <Comp {...props} />
      </Decorator>
    );
  };
  return Decorated;
};

const AppHome = decorate(App)(Home);
const AppAboutMe = decorate(App)(AboutMe);
const AppPortfolio = decorate(App)(Portfolio);

export default class Site extends Component {
  constructor() {
    super();
    this.state = {location: window.location.pathname};
  }

  componentDidMount() {
    window.addEventListener('popstate', () => {
      this.setState({location: window.location.pathname});
    });
  }

  getChildContext() {
    return {navigate: path => this.setState({location: path})};
  }

  render(props, state) {
    return (
      <Router {...state}>
        <Route path="/" component={AppHome} />
        <Route path="/about-me" component={AppAboutMe} />
        <Route path="/portfolio" component={AppPortfolio} />
      </Router>
    );
  }
}
