import React from 'react';
import { Link } from 'react-router-dom';

const valueOrEmptyString = (value) => {
  return value ? value : '';
};

const SongData = ({ songData }) => {
  if (!songData) {
    return <div className="card">Loading...</div>
  }
  const ccliSection = songData.ccli ? <p>CCLI: <a target='_blank' href={`http://ca.search.ccli.com/songs/${songData.ccli}`}>{songData.ccli}</a></p> : '';
  const copyrightSection = songData.copyDate ? <p>Copyright: {songData.copyDate}</p> : '';
  return (
    <div>
      <div className="card-title">{songData.title} <Link to={`/song/${songData.songId}/edit`}><i className="material-icons prefix">mode edit</i></Link></div>
      <p>{songData.author1}{songData.author2 ? ` & ${songData.author2}` : ``}</p>
      <p>Key: {valueOrEmptyString(songData.songKey)}</p>
      <p>Style: {valueOrEmptyString(songData.style)}</p>
      {/* <p>Uses: {valueOrEmptyString(songData.use1)}{songData.use2 ? `, ${songData.use2}` : ``}</p> */}
      <p>Notes: {valueOrEmptyString(songData.notes)}</p>
      {ccliSection}
      {copyrightSection}
    </div>
  )
};

export default SongData;
