import React from 'react';
import MediasiteApi from '../api/MediasiteApi';
import { Link } from 'react-router-dom';

export default class SongList extends React.PureComponent {
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
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      );
    }
    const songs = this.state.songs.map(song => {
      return <tr key={song.songId}>
        <td><Link to={`/song/${song.songId}`}>{song.title}</Link></td>
        <td>{song.copyDate}</td>
        <td>{song.tempo}</td>
        <td>{song.bpm}</td>
        <td>{song.category}</td>
        <td>{getBibleReferenceLinks(song.bibleReferences)}</td>
        <td style={{textAlign: 'center'}}>{song.songKey}</td>
      </tr>
    });
    return (
      <div>
        <h4>Circle's Song List</h4>
          <p>
              <a href="https://www.youtube.com/playlist?list=PL7Gp-Hq9eDczbmdCqrWu_dh4X64jYCHZX">YouTube</a> - <a href="https://open.spotify.com/user/22frgomriyj5wiyykniraxcwi/playlist/3ZZFfCNxlxk1zqEDY0gLMD?si=oGEsJbs-RTmA3DA-_ygzFw">Spotify</a>
          </p>
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

function getBibleReferenceLinks(rawRefs) {
  return rawRefs
    .split(',')
    .map(ref => ref.trim())
    .map(ref => <a href={`https://www.biblegateway.com/passage/?version=NIV&search=${ref}`} key={ref} target="_blank">{ref}</a>)
    .reduce((curr, prev) => [prev, ', ', curr]);
}
