import React from 'react';
import { Link } from 'react-router-dom';
import { CircleSongList } from "./CircleSongList";
import auth from "../auth";

const valueOrEmptyString = value => value ? value : '';

const SongData = ({ songData }) => {
  if (!songData) {
    return <div className="card">Loading...</div>
  }
  return (
    <div>
      <div className="card-title">{songData.title} {auth.canAddSongs() ? <Link to={`/song/${songData.songId}/edit`}><i className="material-icons black-text">mode_edit</i></Link> : ''}</div>
      <CircleSongList inRotation={songData.inRotation} />
      <br />
      <p>{songData.author1}{songData.author2 ? ` & ${songData.author2}` : ``}</p>
      <p>Key: {songData.songKey}</p>
      {songData.tempo ?
        <p>Tempo: {songData.tempo}</p> :
        ''}
      {songData.bpm ?
        <p>Beats per minute: {songData.bpm}</p> :
        ''}
      {songData.category ?
        <p>Category: {valueOrEmptyString(songData.category)}</p> :
        ''}
      {songData.bibleReferences ?
        <p>Bible References: {valueOrEmptyString(songData.bibleReferences)}</p> :
        ''}
      {songData.notes ?
        <p>Notes: {valueOrEmptyString(songData.notes)}</p> :
        ''}
      {songData.externalUrl ?
        <p><a href={songData.externalUrl} target="_blank">External Url</a></p> :
        ''}
      {songData.ccli ?
        <p>CCLI: <a target='_blank' href={`http://ca.search.ccli.com/songs/${songData.ccli}`}>{songData.ccli}</a></p> :
        ''}
      {songData.copyDate ?
        <p>Copyright: {songData.copyDate}</p> :
        ''}
    </div>
  )
};

export default SongData;
