import React from 'react';

import createHistory from 'history/createBrowserHistory';

import auth from '../auth';

export default class Logout extends React.Component {
  componentDidMount() {
    auth.logout(() => {
      createHistory().push('/');
    });
  }

  render() {
    return <p>You are now logged out</p>
  }
}
