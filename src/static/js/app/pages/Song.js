import React from 'react';
import { Link } from 'react-router';
import MediasiteApi from '../api/MediasiteApi';

export default class Song extends React.Component {
  state = {
    title: 'Loading...',
    author1: '',
    author2: ''
  }

  componentDidMount() {
    MediasiteApi.getSongById(this.props.params.songId, (songData) => {
      // do stuff.
      this.setState({
        title: songData.data.Title,
        author1: songData.data.Author1,
        author2: songData.data.Author2
      });
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.title || 'Loading...'}</h2>
        <p>{this.state.author1}</p>
        <p>{this.state.author2}</p>
        <p>Here is a song id! {this.props.params.songId}</p>
      </div>
    );
  }
}
