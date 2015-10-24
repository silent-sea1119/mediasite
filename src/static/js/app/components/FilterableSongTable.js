import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

import MediasiteApi from '../api/MediasiteApi';

import SongTileGroup from './SongTileGroup';
import SearchBar from './SearchBar';

export default class FilterableSongTable extends React.Component {
  state = {
    filterText: '',
    songData: []
  }

  componentDidMount() {
    this.getSongsFromApi();
  }

  getSongsFromApi(filterText) {
    if (filterText === undefined) {
      filterText = "";
    }

    MediasiteApi.getSongs(filterText, (songData) => {
      this.setState({
        songData: songData.data.rows,
        totalSongs: songData.data.totalSongs
      });
    })
  }

  handleUserInput = (filterText) => {
    this.setState({
      filterText: filterText
    });

    // Attempt to avoid hammering the API with requests as someone types.
    _.throttle(_.bind(this.getSongsFromApi, this, filterText), 300, { leading: false })();
  }

  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText}
                   onUserInput={this.handleUserInput} />
        <SongTileGroup songs={this.state.songData}
                   filterText={this.state.filterText}
                   totalSongCount={this.state.totalSongs} />
      </div>
    );
  }
}
