import React from 'react';
import { Link } from 'react-router-dom';

import { parseYouTubeLink } from './YouTube';
import { CircleSongList } from './CircleSongList';
import auth from "../auth";

export default class SongTile extends React.Component {
  render() {
    const songUrl = "/song/" + this.props.songId;
    let youTubeLink;
    if (this.props.youTubeLink) {
      let youTubeUrl = parseYouTubeLink(this.props.youTubeLink, false);
      youTubeLink = <a href={youTubeUrl} target='_blank'>YouTube <i className="material-icons tiny">call_made</i></a>
    }
    return (
      <div className="col l4 m6 s12">
        <div className="card small">
          <div className="card-content">
            <h5>{this.props.title}</h5>
            <p>{this.props.author1}</p>
            <p>{this.props.author2}</p>
            <br />
            <CircleSongList inRotation={this.props.inRotation} />
          </div>
          <div className="card-action">
            <Link to={songUrl}>View</Link>
            {(auth.canAddSongs()) ?
            <Link to={songUrl + '/edit'}>Edit</Link>
                : ''}
            {youTubeLink}
          </div>
        </div>
      </div>
    )
  }
}
