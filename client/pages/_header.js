import React from 'react';  // Required for JSX magicks
import { Link } from 'react-router-dom';

const MediasiteHeader = ({loggedIn, user, location}) => {
  // If printing a song, don't display header (only way I could figure how to do this 🤔)
  if (/\/song\/.*\/print/.test(location.pathname)) return '';
  let addSongLink = '';
  let songsLink = '';
  if (loggedIn) {
    addSongLink = <li><Link to='/new-song'>Add Song</Link></li>;
    songsLink = <li><Link to='/songs'>Songs</Link></li>;
  }
  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>Circle's Mediasite</Link>
        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
        <ul className='right hide-on-med-and-down'>
          {addSongLink}
          {songsLink}
          <li>
            <a href='#'>{user !== null ? user.firstName : ''}</a>
          </li>
          <li>
            <img src={user !== null ? user.profilePicture : ''} className='user-profile__image' />
          </li>
          <li className='divider'></li>
          <li><Link to={ loggedIn ? '/logout' : '/login' }>{ loggedIn ? 'Logout' : 'Login' }</Link></li>
        </ul>
        <ul className="side-nav" id="mobile-demo">
          <li><Link to='/songs'>Songs</Link></li>
          <li>
            <a href='#'>{user !== null ? user.firstName : ''}</a>
          </li>
          <li>
            <img src={user !== null ? user.profilePicture : ''} className='user-profile__image' />
          </li>
          <li><Link to={ loggedIn ? '/logout' : '/login' }>{ loggedIn ? 'Logout' : 'Login' }</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default MediasiteHeader;
