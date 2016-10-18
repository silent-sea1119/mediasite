import React from 'react';

const valueOrEmptyString = (value) => {
  return value ? value : '';
};

const SongData = ({ songData }) => {
  if (!songData) {
    return <div className="card">Loading...</div>
  }
  const ccliSection = songData.CCLI ? <p>CCLI: <a target='_blank' href={`http://ca.search.ccli.com/songs/${songData.CCLI}`}>{songData.CCLI}</a></p> : '';
  const copyrightSection = songData.CopyDate ? <p>Copyright: {songData.CopyDate}</p> : '';
  return (
    <div className="song-data">
      <div className="card-title">{songData.Title}</div>
      <p>{songData.Author1}{songData.Author2 ? ` & ${songData.Author2}` : ``}</p>
      <p>Key: {valueOrEmptyString(songData.SongKey)}</p>
      <p>Style: {valueOrEmptyString(songData.Style)}</p>
      <p>Uses: {valueOrEmptyString(songData.Use1)}{songData.Use2 ? `, ${songData.Use2}` : ``}</p>
      <p>Notes: {valueOrEmptyString(songData.Notes)}</p>
      {ccliSection}
      {copyrightSection}
    </div>
  )
};

export default SongData;
