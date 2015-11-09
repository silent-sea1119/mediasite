import React from 'react';

export default class SongSheetConfigurator extends React.Component {
  render() {
    return (
      <div className="song-sheet-config">
        Song Key <select className="form-control"><option>A</option></select>
        <div className="checkbox">
          <label>
            <input type="checkbox" defaultChecked /> Print Arrangement
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" defaultChecked /> Print Chords
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" defaultChecked /> Print Part Names
          </label>
        </div>
        Text Size <select className="form-control"><option>16</option></select>

        <div className="song-sheet-config__ctas">
          <button className="btn btn-large btn-primary">Generate Sheet</button>
          <button className="btn btn-large btn-default">Generate Preview</button>
        </div>
      </div>
    );
  }
}
