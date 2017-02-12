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

    const song = new Song(songId, songData.title, songData.songKey, songData.songData);

    const ccliSection = songData.ccli ? <p>CCLI: <a target='_blank' href={`http://ca.search.ccli.com/songs/${songData.CCLI}`}>{songData.ccli}</a></p> : '';
    const copyrightSection = songData.copyDate ? <p>Copyright: {songData.copyDate}</p> : '';

    const arrangementSection = printArrangements === 'true' ? <div className="ArrangementTitle">Arrangement: {songData.songOrder}</div> : '';

    return (
      <div style={{backgroundColor: 'white', padding: '10px'}}>
        <div className="song-data">
          <div className="card-title">{songData.title}</div>
          <p>{songData.author1}{songData.author2 ? ` & ${songData.author2}` : ``}</p>
          <p>Key: {valueOrEmptyString(songData.songKey)}</p>
          <p>Style: {valueOrEmptyString(songData.style)}</p>
          {/* <p>Uses: {valueOrEmptyString(songData.use1)}{songData.use2 ? `, ${songData.use2}` : ``}</p> */}
          <p>Notes: {valueOrEmptyString(songData.notes)}</p>
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
