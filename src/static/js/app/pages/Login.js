import React from 'react';
import { withRouter } from 'react-router';

import auth from '../auth';

class Login extends React.Component {
  componentDidMount() {
    const { query } = this.props.location;
    this.loginByUserId(query.userId);
  }

  loginByUserId(userId) {
    auth.login(userId, (loggedIn) => {
      if (!loggedIn) {
        return;
      }
      const { location } = this.props;

      if (location.query.nextUrl || location.state && location.state.nextPathname) {
        this.props.router.replace(location.query.nextUrl || location.state.nextPathname);
      } else {
        this.props.router.replace('/welcome');
      }
    });
  }

  render() {
    const { location } = this.props;
    let loginDisabled = !!location.query.success || auth.loggedIn();
    let nextUrl = location.state ? location.state.nextPathname ? location.state.nextPathname : '' : '';
    return (
      <div className='card login'>
        <div className="card-content">
          <h2>Welcome to Circle's Mediasite!</h2>
          <p>This is the place that folks come when they need media.</p>
          <a
            className={ 'btn btn-large waves-effect btn-primary' + (loginDisabled ? ' disabled' : '') }
            href={'/api/v1/cityoauth/login/' + (nextUrl ? '?nextUrl=' + nextUrl : '')}>
            { !loginDisabled ? 'Login with The City!' : 'Logging in...' }
          </a>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);
