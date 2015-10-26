import React from 'react';

import connectHistory from '../connectHistory';
import auth from '../auth';

class Login extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    var email = this.refs.username.value;
    var pass = this.refs.pass.value;

    auth.login(email, pass, (loggedIn) => {
      if (!loggedIn)
        return this.setState({ error: true })

      var { location } = this.props;

      if (location.state && location.state.nextPathname) {
        this.props.history.replaceState(null, location.state.nextPathname)
      } else {
        this.props.history.replaceState(null, '/songs')
      }
    })
  }

  render() {
    return (
      <div className='login'>
        <h2>Welcome to the CDAC Mediasite!</h2>
        <p>This is the place that folks come when they need media.</p>
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref='username' />
          <input type='password' ref='pass' />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default connectHistory(Login)
