import React from 'react';  // Required for JSX magicks
import { Link } from 'react-router';

const MediasiteHeader = (props) => {
  return (
    <nav className='navbar navbar-default'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <Link to='/' className='navbar-brand'>CDAC Mediasite</Link>
        </div>

        <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
          <ul className='nav navbar-nav'>
            <li><Link to='/songs'>Songs</Link></li>
          </ul>
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#'>{props.user !== null ? props.user.firstName : ''}</a>
            </li>
            <li>
              <img src={props.user !== null ? props.user.profilePicture : ''} className='user-profile__image' />
            </li>
            <li role='separator' className='divider'></li>
            <li><Link to={ props.loggedIn ? '/logout' : '/login' }>{ props.loggedIn ? 'Logout' : 'Login' }</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MediasiteHeader;
