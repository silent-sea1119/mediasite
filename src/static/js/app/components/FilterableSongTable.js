import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

import MediasiteApi from '../api/MediasiteApi';

import SongTileGroup from './SongTileGroup';
import SearchBar from './SearchBar';

export default class FilterableSongTable extends React.Component {
  state = {
    searchText: '',
    songData: []
  }

  componentDidMount() {
    this.getSongsFromApi();
  }

  getSongsFromApi(searchText) {
    if (searchText === undefined) {
      searchText = "";
    }

    MediasiteApi.getSongs(searchText, (songData) => {
      this.setState({
        songData: songData.data,
        totalSongs: songData.totalSongs
      });
    });
  }

  handleUserInput = (searchText) => {
    this.setState({
      searchText: searchText
    });

    // Attempt to avoid hammering the API with requests as someone types.
    _.throttle(_.bind(this.getSongsFromApi, this, searchText), 300, { leading: false })();
  }

  render() {
    return (
      <div>
        <SearchBar searchText={this.state.searchText}
                   onUserInput={this.handleUserInput} />
        <SongTileGroup songs={this.state.songData}
                   searchText={this.state.searchText}
                   totalSongCount={this.state.totalSongs} />
      </div>
    );
  }
}
