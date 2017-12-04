import React from 'react';

import auth from '../auth';

export default class Logout extends React.Component {
  componentDidMount() {
    auth.logout(() => {
      this.props.history.push('/');
    });
  }

  render() {
    return <p>You are now logged out</p>
  }
}
