import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, History } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Song, Login } from './pages/all';
import FilterableSongTable from './components/FilterableSongTable';
import auth from './auth';

class App extends React.Component {
  state = {
    loggedIn: auth.loggedIn()
  }

  updateAuth = (loggedIn) => {
    this.setState({
      loggedIn: loggedIn
    })
  }

  componentWillMount() {
    auth.onChange = this.updateAuth;
    auth.login();
  }

  render() {
    return (
      <div className='container'>
        {this.props.children}
      </div>
    );
  }
}

function requireAuth(nextState, replaceState) {
  if (!auth.loggedIn()) {
    replaceState({ nextPathname: nextState.location.pathname }, '/login')
  }
}

// ReactDOM.render
render((
  <Router history={createBrowserHistory()}>
    <Route path='/' component={App}>
      // TODO: Replace FilterableSongTable with some welcome/landing page?
      <IndexRoute component={!auth.loggedIn() ? Login : FilterableSongTable} />
      <Route path='songs' component={FilterableSongTable} onEnter={requireAuth} />
      <Route path='song/:songId' component={Song} onEnter={requireAuth} />
      <Route path='login' component={Login} />
    </Route>
  </Router>
), document.getElementById('mediasite'));
