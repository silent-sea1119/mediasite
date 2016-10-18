import 'materialize-css';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, History, browserHistory } from 'react-router';

import {
    Login,
    Logout,
    Song,
    FilterableSongTable,
    SongSheet,
    MediasiteHeader,
    Welcome
} from './pages';
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
    $('.button-collapse').sideNav();
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

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace(`/login?nextPathName=${nextState.location.pathname}`)
  }
}

// ReactDOM.render
render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={!auth.loggedIn() ? Login : Welcome} />
      <Route path='welcome' component={Welcome} onEnter={requireAuth} />
      <Route path='songs' component={FilterableSongTable} onEnter={requireAuth} />
      <Route path='song/:songId' component={Song} onEnter={requireAuth} />
      <Route path='login' component={Login} />
      <Route path='logout' component={Logout} />
    </Route>
    <Route path='song/:songId/print' component={SongSheet} onEnter={requireAuth} />
  </Router>
), document.getElementById('mediasite'));
