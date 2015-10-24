import React from 'react';
import { Link } from 'react-router';

export default class Song extends React.Component {
  componentDidMount() {
    // console.log('things are happening, we are entering Song!');
  }

  render() {
    return (
      <div>
        <h2>{this.props.songName}</h2>
        <p>Something about the authors, adding it to a setlist, etc.</p>
        <p>Here is a song id! {this.props.params.songId}</p>
      </div>
    );
  }
}
