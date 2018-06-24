import React from 'react';
import { withRouter } from 'react-router-dom';
import qs from 'qs';

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
  };

  componentWillMount() {
    const queryParams = qs.parse(this.props.location.search);
    this.setState({
      previewing: queryParams.preview || false,
      songId: this.props.match.params.songId
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
    const queryParams = qs.parse(this.props.location.search, {ignoreQueryPrefix: true});
    const { songKey, textSize, vocalistMode } = queryParams;
    const songId = this.props.match.params.songId;

    const song = new Song(songId, songData.title, songData.songKey, songData.songData);

    return (
      <div style={{backgroundColor: 'white', padding: '10px'}}>
        <SongOptions songKey={songKey} textSize={textSize} songId={songId} vocalistMode={vocalistMode} previewing={this.state.previewing === 'true'} />
        <div className="song-data">
          <div className="card-title">{songData.title}</div>
          {this.state.previewing ?
            <div className="preview-only">Preview Only</div> :
            ''}
          <p>{songData.author1}{songData.author2 ? ` & ${songData.author2}` : ``}</p>
          <p>Key: {valueOrEmptyString(songData.songKey)}</p>
          <p>Notes: {valueOrEmptyString(songData.notes)}</p>
          {songData.tempo ?
            <p>Tempo: {songData.tempo}</p> :
            ''}
          {songData.bpm ?
            <p>Beats per minute: {songData.bpm}</p> :
            ''}
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
