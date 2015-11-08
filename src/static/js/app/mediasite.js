import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route, IndexRoute, Link, History } from 'react-router';

import { Login, Logout, Song, MediasiteHeader } from './pages/all';
import FilterableSongTable from './components/FilterableSongTable';
import auth from './auth';
import MediasiteApi from './api/MediasiteApi';

class App extends React.Component {
  state = {
    loggedIn: auth.loggedIn(),
    user: null
  };

  updateAuth = (loggedIn) => {
    let newState = {
      loggedIn: loggedIn
    };
    if (!loggedIn && this.state.loggedIn && this.state.user !== null) {
      newState.user = null;
    }
    this.setState(newState);
  };

  componentDidMount() {
    this.loadUserInfo();
  }

  componentDidUpdate() {
    this.loadUserInfo();
  }

  componentWillMount() {
    auth.onChange = this.updateAuth;
    auth.login();
  }

  loadUserInfo() {
    if (this.state.user === null && this.state.loggedIn) {
      MediasiteApi.getUserInfo(localStorage.userId, (userInfo) => {
        this.setState({
          user: {
            'title': userInfo.data.title,
            'profilePicture': userInfo.data.profile_picture,
            'firstName': userInfo.data.first_name,
            'lastName': userInfo.data.last_name,
            'email': userInfo.data.email
          }
        });
      });
    }
  }

  render() {
    return (
      <div className='mediasite'>
        <MediasiteHeader loggedIn={this.state.loggedIn} user={this.state.user} />
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const Welcome = () => {
  return (
    <div>
      <h2>Welcome to the CDAC Mediasite!</h2>
      <p>This is the place that folks come when they need media.</p>
      <Link className='btn btn-large btn-primary' to='/songs'>Song Search</Link>
    </div>
  )
};

function requireAuth(nextState, replaceState) {
  if (!auth.loggedIn()) {
    replaceState({ nextPathname: nextState.location.pathname }, '/login')
  }
}

// ReactDOM.render
render((
  <Router history={createBrowserHistory()}>
    <Route path='/' component={App}>
      <IndexRoute component={!auth.loggedIn() ? Login : Welcome} />
      <Route path='welcome' component={Welcome} onEnter={requireAuth} />
      <Route path='songs' component={FilterableSongTable} onEnter={requireAuth} />
      <Route path='song/:songId' component={Song} onEnter={requireAuth} />
      <Route path='login' component={Login} />
      <Route path='logout' component={Logout} />
    </Route>
  </Router>
), document.getElementById('mediasite'));
