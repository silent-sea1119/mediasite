import React from 'react';
import { Link } from 'react-router';

export default class SongTile extends React.Component {
  render() {
    const songUrl = "/song/" + this.props.songId;
    return (
      <div className="col l4 m6 s12">
        <div className="card small">
          <div className="card-content">
            <h5>{this.props.title}</h5>
            <p>{this.props.author1}</p>
            <p>{this.props.author2}</p>
          </div>
          <div className="card-action">
            <Link to={songUrl}>View</Link>
          </div>
        </div>
      </div>
    )
  }
}
