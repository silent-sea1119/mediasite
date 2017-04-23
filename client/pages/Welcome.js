import React from 'react';
import Link from 'react-router/lib/Link';

import { SongsPrinted, SongsInDatabase, UsersInDatabase } from '../components/MediasiteStats';

const Welcome = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h2>Circle's Mediasite</h2>
        <p>Some stats about the mediasite:</p>
        <div className="row">
          <SongsPrinted></SongsPrinted>
          <SongsInDatabase></SongsInDatabase>
          <UsersInDatabase></UsersInDatabase>
        </div>
        <Link className='btn btn-large btn-primary' to='/songs'>Song Search</Link>
      </div>
    </div>
  )
};

export default Welcome;
