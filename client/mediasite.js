import 'materialize-css';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Redirect, Route, withRouter } from 'react-router-dom';

import { FirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';

import { loadScript, browserSupportsAllFeatures } from './browser-helpers';

import { Logout, MediasiteHeader, Welcome } from './pages';
import auth from './auth';

import {
  LoadableEditSong,
  LoadableNewSong,
  LoadableSong,
  LoadableSongList,
  LoadableSongSheet,
  LoadableSongTable
} from './pages/loadable-pages';


// Configure Firebase.
const config = {
  apiKey: 'AIzaSyDJGi-gLoEjZvMN9PqMAloHCAD9QTdK1kI',
  authDomain: 'cdac-mediasite.firebaseapp.com'
};
firebase.initializeApp(config);

// Firebase user has a ton of extra info that doesn't need to get shared around.
function getBareUserFromFirebaseUser(user) {
  return {
    displayName: user.displayName,
    email: user.email,
    emailVerified: user.emailVerified,
    phoneNumber: user.phoneNumber,
    photoURL: user.photoURL,
    uid: user.uid
  }
}

class App extends React.Component {
  uiConfig = {
    callbacks: {
      signInSuccess: (currentUser, credential, redirectUrl) => {
        this.setState({
          loggedIn: true,
        });
        localStorage.userId = currentUser.uid;
        return true;
      }
    },
    signInFlow: 'popup',
    signInSuccessUrl: '/welcome',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
  };

  state = {
    loggedIn: false,
    user: null
  };

  componentDidMount() {
    $('.button-collapse').sideNav();
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      const newState = {};
      if (user) {
        newState.loggedIn = true;
        newState.user = getBareUserFromFirebaseUser(user);
      } else {
        // No user is signed in.
        newState.loggedIn = false;
        newState.user = null;
        auth.logout();
      }
      this.setState(newState);
    });
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
            <Route path="/login" component={(props) => <Login uiConfig={this.uiConfig} {...props} />} />
            <PrivateRoute path="/logout" component={Logout} />
            <PrivateRoute path="/new-song" component={LoadableNewSong} />
            <PrivateRoute path="/song-list" component={LoadableSongList} />
            <PrivateRoute path="/songs" component={LoadableSongTable} />
            <PrivateRoute path='/song/:songId' component={LoadableSong} exact={true} />
            <PrivateRoute path='/song/:songId/edit' component={LoadableEditSong} />
          </div>
        </div>
      </Router>
    );
  }
}

const Login = withRouter((props) => {
  const uiConfig = { ...props.uiConfig, signInSuccessUrl: props.location.state.from };
  return (
    <div className="card">
      <div className="card-content">
        <h2>Welcome to Circle's Mediasite!</h2>
        <p>This is the place that folks come when they need media.</p>
        <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    </div>
  )
});

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => (
      auth.loggedIn() ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: `/login`,
          state: { from: props.location.pathname + props.location.search }
        }}/>
      )
    )
  }/>
};

function startRender(error) {
  if (error) {
    console.error(error);
  } else {
    render((
      <App />
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
