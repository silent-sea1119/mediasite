import React from 'react';

import { browserHistory } from 'react-router';

import connectHistory from '../connectHistory';
import auth from '../auth';

class Logout extends React.Component {
  componentDidMount() {
    auth.logout(() => {
      browserHistory.replaceState(null, '/');
    });
  }

  render() {
    return <p>You are now logged out</p>
  }
}

export default Logout
