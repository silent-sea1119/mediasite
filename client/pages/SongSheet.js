import React from 'react';
import withRouter from "react-router/lib/withRouter";

import MediasiteApi from '../api/MediasiteApi';
import { Song } from '../mediacodec/Song.js';
import SongData from '../components/SongData.js';
import SongOptions from '../components/SongOptions.js';

class SongSheet extends React.Component {
  state = {
    isLoading: true,
    songData: {},
    previewing: null,
    songId: null
  }

  componentWillMount() {
    this.setState({
      previewing: this.props.location.query.preview || false,
      songId: this.props.params.songId
    });
  }

  componentDidMount() {
    const {songId, previewing} = this.state;
    MediasiteApi.getSongById(songId, (songData) => {
      this.setState({
        songData: songData.data,
        isLoading: false
      });
    });
    if (!previewing) {
      MediasiteApi.trackSongSheetGeneration(songId);
    }
  }

  getSongHtml(song, songKey, textSize, isVocalistMode) {
    if (isVocalistMode === 'true') {
      return {__html: song.toVocalistHtml(textSize)}
    }
    return {__html: song.toHtml(songKey, textSize)};
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
    const { songKey, textSize, vocalistMode } = this.props.location.query;
    const songId = this.props.params.songId;

    const song = new Song(songId, songData.title, songData.songKey, songData.songData);

    const ccliSection = songData.ccli ? <p>CCLI: <a target='_blank' href={`http://ca.search.ccli.com/songs/${songData.CCLI}`}>{songData.ccli}</a></p> : '';
    const copyrightSection = songData.copyDate ? <p>Copyright: {songData.copyDate}</p> : '';

    const previewSection = this.state.previewing ? <div className="preview-only">Preview Only</div> : null;
    return (
      <div style={{backgroundColor: 'white', padding: '10px'}}>
        <SongOptions songKey={songKey} textSize={textSize} songId={songId} vocalistMode={vocalistMode}></SongOptions>
        <div className="song-data">
          <div className="card-title">{songData.title}</div>
          {previewSection}
          <p>{songData.author1}{songData.author2 ? ` & ${songData.author2}` : ``}</p>
          <p>Key: {valueOrEmptyString(songData.songKey)}</p>
          <p>Style: {valueOrEmptyString(songData.style)}</p>
          {/* <p>Uses: {valueOrEmptyString(songData.use1)}{songData.use2 ? `, ${songData.use2}` : ``}</p> */}
          <p>Notes: {valueOrEmptyString(songData.notes)}</p>
          {ccliSection}
          {copyrightSection}
        </div>
        <div className="ArrangementTitle">Arrangement: {songData.songOrder}</div>
        <div dangerouslySetInnerHTML={this.getSongHtml(song, songKey, textSize, vocalistMode)}></div>
      </div>
    )
  }
};

export default withRouter(SongSheet);

const valueOrEmptyString = (value) => {
  return value ? value : '';
};
