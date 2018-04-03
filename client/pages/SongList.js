import React from 'react';
import MediasiteApi from '../api/MediasiteApi';

export class SongList extends React.PureComponent {
  state = {
    songs: []
  };

  componentDidMount() {
    MediasiteApi.getSongsInRotation()
      .then(({ data }) => this.setState({songs: data}));
  }

  render() {
    if (this.state.songs.length === 0) {
      return (
        <div>No songs I guess</div>
      )
    }
    const songs = this.state.songs.map(song => {
      return <tr key={song.songId}>
        <td>{song.title}</td>
        <td>{song.copyDate}</td>
        <td>{song.tempo}</td>
        <td>{song.bpm}</td>
        <td>{song.category}</td>
        <td>{song.bibleReferences}</td>
        <td>{song.songKey}</td>
      </tr>
    });
    return (
      <div>
        <h4>Circle's Song List</h4>
        <table className="bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Tempo</th>
              <th>BPM</th>
              <th>Category</th>
              <th>Scripture References</th>
              <th>Original Key</th>
            </tr>
          </thead>
          <tbody>
            {songs}
          </tbody>
        </table>
      </div>
    );
  }
}
