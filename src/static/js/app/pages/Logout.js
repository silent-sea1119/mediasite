import React from 'react';

import connectHistory from '../connectHistory';
import auth from '../auth';

class Logout extends React.Component {
  componentDidMount() {
    auth.logout(() => {
      this.props.history.replaceState(null, '/');
    });
  }

  render() {
    return <p>You are now logged out</p>
  }
}

export default connectHistory(Logout)
