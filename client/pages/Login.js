import React from 'react';
import { withRouter } from 'react-router-dom';
import qs from 'qs';

import auth from '../auth';

class Login extends React.Component {
  componentDidMount() {
    const { search } = this.props.location;
    const queryParams = qs.parse(search);
    this.loginByUserId(queryParams.userId);
  }

  loginByUserId(userId) {
    auth.login(userId, (loggedIn) => {
      if (!loggedIn) {
        return;
      }
      const { location } = this.props;
      const queryParams = qs.parse(location.search);

      if (queryParams.nextUrl || queryParams.nextPathName) {
        this.props.history.replace(queryParams.nextUrl || queryParams.nextPathName);
      } else {
        this.props.history.replace('/welcome');
      }
    });
  }

  render() {
    const { location } = this.props;
    const queryParams = qs.parse(location.search, {ignoreQueryPrefix: true});

    let loginDisabled = !!queryParams.success || auth.loggedIn();
    let nextUrl = queryParams ? queryParams.nextPathName ? queryParams.nextPathName : '' : '';
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
