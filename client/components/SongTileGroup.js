import React from 'react';
import map from 'lodash.map';

import SongTile from './SongTile';

export default class SongTileGroup extends React.Component {
  render() {
    var searchText = this.props.searchText;
    var songs = map(this.props.songs, function(song) {
      if (searchText !== "" &&
          song.title.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
        return;
      }
      return <SongTile key={song.songId}
                   songId={song.songId}
                   title={song.title}
                   author1={song.author1}
                   author2={song.author2} />;
    });

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
