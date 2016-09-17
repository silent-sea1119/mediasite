import React from 'react';

import { withRouter } from 'react-router';

import auth from '../auth';

class Logout extends React.Component {
  componentDidMount() {
    auth.logout(() => {
      this.props.router.replace('/');
    });
  }

  render() {
    return <p>You are now logged out</p>
  }
}

export default withRouter(Logout)
