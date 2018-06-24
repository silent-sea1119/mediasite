import React from 'react';
import map from 'lodash.map';

import SongTile from './SongTile';

export default class SongTileGroup extends React.Component {
  noMatches(song, searchText) {
    return song.title.toLowerCase().indexOf(searchText.toLowerCase()) === -1 &&
      song.author1.toLowerCase().indexOf(searchText.toLowerCase()) === -1 &&
      song.author2.toLowerCase().indexOf(searchText.toLowerCase()) === -1;
  }

  render() {
    var searchText = this.props.searchText;
    var songs = map(this.props.songs, (song) => {
      if (searchText !== "" && this.noMatches(song, searchText)) {
        return;
      }
      return <SongTile
        key={song.songId}
        songId={song.songId}
        title={song.title}
        author1={song.author1}
        author2={song.author2}
        youTubeLink={song.youtubeLink}
        inRotation={song.inRotation || false} />;
    })
      .filter(Boolean);

    return (
      <div className="row">
        { songs.length > 0 ?
          songs :
          <div className="col sm12">
            <div className="card">
              <div className="card-content">
                No songs matched your search!
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}
