import React from 'react';
import { withRouter } from "react-router";

import MaterializeSelect from '../components/materialize/Select';

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

    return (
      <div className="sheet-song-data">
        <SongData songData={songData} />
        <div dangerouslySetInnerHTML={{__html: song.toHtml(songKey)}}></div>
      </div>
    )
  }
};

export default withRouter(SongSheet);
