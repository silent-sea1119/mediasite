import React from 'react';  // Required for JSX magicks
import { Link } from 'react-router-dom';

const MediasiteHeader = (props) => {
  let addSongLink = '';
  let songsLink = '';
  if (props.loggedIn) {
    addSongLink = <li><Link to='/song/new'>Add Song</Link></li>;
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
            <a href='#'>{props.user !== null ? props.user.firstName : ''}</a>
          </li>
          <li>
            <img src={props.user !== null ? props.user.profilePicture : ''} className='user-profile__image' />
          </li>
          <li className='divider'></li>
          <li><Link to={ props.loggedIn ? '/logout' : '/login' }>{ props.loggedIn ? 'Logout' : 'Login' }</Link></li>
        </ul>
        <ul className="side-nav" id="mobile-demo">
          <li><Link to='/songs'>Songs</Link></li>
          <li>
            <a href='#'>{props.user !== null ? props.user.firstName : ''}</a>
          </li>
          <li>
            <img src={props.user !== null ? props.user.profilePicture : ''} className='user-profile__image' />
          </li>
          <li><Link to={ props.loggedIn ? '/logout' : '/login' }>{ props.loggedIn ? 'Logout' : 'Login' }</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default MediasiteHeader;
