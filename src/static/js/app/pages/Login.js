import React from 'react';

export default class Login extends React.Component {
  handleSubmit = (e) => {
    
  }

  render() {
    return (
      <div className='login'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref='username' />
          <input type='password' ref='password' />
          <input type='submit' />
        </form>
      </div>
    )
  }
}
