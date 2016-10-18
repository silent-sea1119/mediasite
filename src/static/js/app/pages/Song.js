import React from 'react';

import SongSheetConfiguratorCard from '../components/SongSheetConfigurator';
import YouTube from '../components/YouTube';
import SongDataCard from '../components/SongData';
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
    if (this.state.songData.YouTubeLink) {
      youtubeArea = <YouTube youTubeLink={this.state.songData.YouTubeLink}/>;
    } else {
      youtubeArea = <div>This song doesn't have a YouTube link yet.</div>
    }
    return (
      <div>
        <SongDataCard songData={this.state.songData} />
        <SongSheetConfiguratorCard songKey={this.state.songData.SongKey} songId={this.props.params.songId} />
        {youtubeArea}
      </div>
    );
  }
}
