import React from 'react';

import firebase from 'firebase';

export default class Logout extends React.Component {
  componentDidMount() {
    firebase.auth().signOut().catch(function(error) {
      // An error happened.
      console.log(error);
    });
  }

  render() {
    return <p>You are now logged out</p>
  }
}
