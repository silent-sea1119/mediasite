import React from 'react';

export const CircleSongList = ({ inRotation }) => {
  return (inRotation ?
    <p>
      <i className='tiny material-icons' style={{color: 'green'}}>check_circle</i>
      <a href="https://www.youtube.com/playlist?list=PL7Gp-Hq9eDczbmdCqrWu_dh4X64jYCHZX" target="_blank" className='black-with-hover'>
        Circle's Song List
      </a>
    </p> :
    ''
  );
};
