import React from 'react';

import SongSheetConfiguratorCard from '../components/SongSheetConfigurator';
import YouTube from '../components/YouTube';
import SongData from '../components/SongData';
import MediasiteApi from '../api/MediasiteApi';

export default class Song extends React.Component {
  state = {
    songData: null,
    isLoading: true
  };

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
    let youtubeArea;
    if (this.state.songData.youtubeLink) {
      youtubeArea = <YouTube youTubeLink={this.state.songData.youtubeLink}/>;
    } else {
      youtubeArea = <div>This song doesn't have a YouTube link yet.</div>;
    }
    let songConfiguratorArea;
    if (this.state.songData.songData) {
      songConfiguratorArea = <SongSheetConfiguratorCard songKey={this.state.songData.songKey} songId={this.props.params.songId} />
    } else {
      songConfiguratorArea = <div>This song doesn't have a chart attached yet.</div>;
    }
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <SongData songData={this.state.songData} />
          </div>
        </div>
        {songConfiguratorArea}
        {youtubeArea}
      </div>
    );
  }
}
