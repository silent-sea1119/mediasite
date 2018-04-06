import 'materialize-css';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import { browserSupportsAllFeatures, loadScript } from './browser-helpers';

import { Login, Logout, MediasiteHeader, Welcome } from './pages';
import auth from './auth';
import MediasiteApi from './api/MediasiteApi';
import {
  LoadableEditSong,
  LoadableNewSong,
  LoadableSong,
  LoadableSongList,
  LoadableSongSheet,
  LoadableSongTable
} from './pages/loadable-pages';


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
      <Router>
        <div className='mediasite'>
          <PrivateRoute path='/song/:songId/print' component={LoadableSongSheet} />
          <Route path="/" render={(props)=><MediasiteHeader loggedIn={this.state.loggedIn} user={this.state.user} {...props} />} />
          <div className='container'>
            <PrivateRoute path="/" exact={true} component={Welcome} />
            <PrivateRoute path='/welcome' component={Welcome} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/logout" component={Logout} />
            <PrivateRoute path="/new-song" component={LoadableNewSong} />
            <Route path="/song-list" component={LoadableSongList} />
            <PrivateRoute path="/songs" component={LoadableSongTable} />
            <PrivateRoute path='/song/:songId' component={LoadableSong} exact={true} />
            <PrivateRoute path='/song/:songId/edit' component={LoadableEditSong} />
          </div>
        </div>
      </Router>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.loggedIn() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

function startRender(error) {
  if (error) {
    console.error(error);
  } else {
    render((
      <Router>
        <App />
      </Router>
    ), document.getElementById('mediasite'));
  }
}

if (browserSupportsAllFeatures()) {
  startRender();
} else {
  // If it's not all supported, load some polyfills.
  loadScript('https://cdn.polyfill.io/v2/polyfill.min.js?features=Promise,fetch&rum=1', startRender);
}


// Register service worker because why not do it in here? :)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    console.log('Excellent, registered with scope: ', registration.scope);
  });
}
