import React from 'react';
import { withRouter } from "react-router";

import MediasiteApi from '../api/MediasiteApi';
import { Song } from '../mediacodec/Song.js';
import SongData from '../components/SongData.js';

class SongSheet extends React.Component {
  state = {
    isLoading: true,
    songData: {}
  }

  componentDidMount() {
    MediasiteApi.getSongById(this.props.params.songId, (songData) => {
      this.setState({
        songData: songData.data,
        isLoading: false
      });
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="progress">
            <div className="indeterminate"></div>
        </div>
      );
    }

    const songData = this.state.songData;
    const { songKey, textSize, printArrangements, printChords, printPartNames } = this.props.location.query;
    const songId = this.props.params.songId;

    const song = new Song(songId, songData.Title, songData.SongKey, songData.SongData);

    const ccliSection = songData.CCLI ? <p>CCLI: <a target='_blank' href={`http://ca.search.ccli.com/songs/${songData.CCLI}`}>{songData.CCLI}</a></p> : '';
    const copyrightSection = songData.CopyDate ? <p>Copyright: {songData.CopyDate}</p> : '';

    const arrangementSection = printArrangements === 'true' ? <div className="ArrangementTitle">Arrangement: {songData.SongOrder}</div> : '';

    return (
      <div style={{backgroundColor: 'white'}}>
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
        {arrangementSection}
        <div dangerouslySetInnerHTML={{__html: song.toHtml(songKey)}}></div>
      </div>
    )
  }
};

export default withRouter(SongSheet);

const valueOrEmptyString = (value) => {
  return value ? value : '';
};
