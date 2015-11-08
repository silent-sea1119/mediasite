import React from 'react';
import ReactDOM from 'react-dom';

import connectHistory from '../connectHistory';

import MediasiteApi from '../api/MediasiteApi';

import SongTileGroup from './../components/SongTileGroup';
import SearchBar from './../components/SearchBar';

class FilterableSongTable extends React.Component {
  state = {
    searchText: '',
    songData: []
  };

  componentDidMount() {
    this.getSongsFromApi(this.state.searchText);
  }

  componentWillMount() {
    let { query } = this.props.location;
    let searchText = query && query.searchText ? query.searchText : '';
    this.setState({
      searchText: searchText
    });
  }

  getSongsFromApi(searchText) {
    if (searchText !== '') {
      // Set searchText query parameter
      this.props.history.replaceState(null, '/songs', {'searchText': searchText});
    } else {
      this.props.history.replaceState(null, '/songs', null);
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

    // TODO: Attempt to avoid hammering the API with requests as someone types.
    this.getSongsFromApi(searchText);
  };

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

export default connectHistory(FilterableSongTable)
