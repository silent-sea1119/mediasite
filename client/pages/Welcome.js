import React from 'react';
import Link from 'react-router/lib/Link';

const Welcome = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h2>Welcome to Circle's Mediasite!</h2>
        <p>This is the place that folks come when they need media.</p>
        <Link className='btn btn-large waves-effect btn-primary' to='/songs'>Song Search</Link>
      </div>
    </div>
  )
};

export default Welcome;
