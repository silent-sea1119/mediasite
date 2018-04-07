import React from 'react';
import { withRouter } from 'react-router-dom';
import qs from 'qs';

import MediasiteApi from '../api/MediasiteApi';

import SongTileGroup from './../components/SongTileGroup';
import SearchBar from './../components/SearchBar';

class FilterableSongTable extends React.Component {
  timeout = null;

  state = {
    searchText: '',
    inRotationOnly: true,
    songData: [],
    isLoading: true
  };

  componentDidMount() {
    this.getSongsFromApi(this.state.searchText, this.state.inRotationOnly);
  }

  componentWillMount() {
    const { search } = this.props.location;
    const queryParams = qs.parse(search, {ignoreQueryPrefix: true});
    const searchText = queryParams.searchText ? queryParams.searchText : '';
    this.setState({
      searchText: searchText
    });
  }

  getSongsFromApi(searchText, inRotationOnly, forcedSearch) {
    this.setState({
      isLoading: true
    });
    if (searchText !== '') {
      // Set searchText query parameter
      this.props.history.replace(`/songs?searchText=${searchText}`);
    } else {
      this.props.history.replace('/songs');
    }

    if (this.state.songData.length === 0 || forcedSearch) {
      // Only load song data the first time...
      MediasiteApi.getSongs('', inRotationOnly, (songData) => {
        this.setState({
          songData: songData.data,
          isLoading: false
        });
      });
    } else {
      this.setState({
        isLoading: false
      });
    }
  }

  handleUserInput = searchText => {
    this.setState({
      searchText  // TODO: Has to be a way to do this stuff without setting state twice
    });
    this.getSongsFromApi(searchText, this.state.inRotationOnly);
  };

  handleInRotationOnlyChanged = checkboxEvent => {
    this.setState({
      inRotationOnly: checkboxEvent.target.checked
    });
    this.getSongsFromApi(this.state.searchText, checkboxEvent.target.checked, true);
  };

  render() {
    return (
      <div>
        <SearchBar searchText={this.state.searchText}
                   onUserInput={this.handleUserInput} />
        <div className="input-field col s12" style={{ marginTop: '-10px', marginBottom: '35px' }}>
          <input id='in-rotation-only' type="checkbox" className="filled-in" checked={this.state.inRotationOnly} onChange={this.handleInRotationOnlyChanged} />
          <label htmlFor='in-rotation-only'>Only show songs from Circle's Song List</label>
        </div>
        {this.state.isLoading ?
          <div className="progress">
            <div className="indeterminate"></div>
          </div> :
          <SongTileGroup songs={this.state.songData}
                         searchText={this.state.searchText}/>
        }
      </div>
    );
  }
}

export default withRouter(FilterableSongTable)
