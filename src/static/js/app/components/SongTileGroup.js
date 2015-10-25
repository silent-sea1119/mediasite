import React from 'react';
import _ from 'underscore';

import SongTile from './SongTile';

export default class SongTileGroup extends React.Component {
  render() {
    var searchText = this.props.searchText;
    var songs = _.map(this.props.songs, function(song) {
      if (searchText !== "" &&
          song.cell[0].toLowerCase().indexOf(searchText) === -1) {
        return;
      }
      return <SongTile key={song.id}
                   songId={song.id}
                   title={song.cell[0]}
                   author1={song.cell[1]}
                   authro2={song.cell[2]} />;
    });

    return (
      <div className="row">
        {songs}
      </div>
    );
  }
}
