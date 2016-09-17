import React from 'react';
import { withRouter } from 'react-router';

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
    const { query } = this.props.location;
    const searchText = query && query.searchText ? query.searchText : '';
    this.setState({
      searchText: searchText
    });
  }

  getSongsFromApi(searchText) {
    if (searchText !== '') {
      // Set searchText query parameter
      this.props.router.replace(`/songs?searchText=${searchText}`);
    } else {
      this.props.router.replace('/songs');
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
      searchText  // TODO: Has to be a way to do this stuff without setting state twice
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

export default withRouter(FilterableSongTable)
