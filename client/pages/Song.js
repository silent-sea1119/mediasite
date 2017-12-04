import React from 'react';
import { withRouter } from 'react-router-dom';

import SongSheetConfiguratorCard from '../components/SongSheetConfigurator';
import YouTube from '../components/YouTube';
import SongData from '../components/SongData';
import MediasiteApi from '../api/MediasiteApi';
import { Transposer } from '../mediacodec/Transposer';

class Song extends React.Component {
  state = {
    songData: null,
    isLoading: true
  };

  componentDidMount() {
    MediasiteApi.getSongById(this.props.match.params.songId, (songData) => {
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
    let { key } = this.props.location.query;
    if (Transposer.allKeys.indexOf(key) === -1) {
      // If they tried to give an invalid key, don't use it.
      key = null;
    }

    let youtubeArea;
    if (this.state.songData.youtubeLink) {
      youtubeArea = <YouTube youTubeLink={this.state.songData.youtubeLink}/>;
    } else {
      youtubeArea = <div>This song doesn't have a YouTube link yet.</div>;
    }
    let songConfiguratorArea;
    if (this.state.songData.songData.parts) {
      songConfiguratorArea = <SongSheetConfiguratorCard songKey={key || this.state.songData.songKey} songId={this.props.match.params.songId} history={this.props.history} />
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

export default withRouter(Song);
