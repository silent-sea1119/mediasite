import React from 'react';

import firebase from 'firebase';

export default class Logout extends React.Component {
  componentDidMount() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      this.props.history.push('/login');
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
  }

  render() {
    return <p>You are now logged out</p>
  }
}
