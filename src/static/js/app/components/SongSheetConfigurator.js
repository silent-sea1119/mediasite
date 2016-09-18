import React from 'react';
import 'materialize-css';

export default class SongSheetConfigurator extends React.Component {
  componentDidMount() {
    $('select').material_select();
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="card-title">Print Song Sheet:</div>
          <div className="input-field">
            <select><option value="A">A</option></select>
            <label>Song Key</label>
          </div>
          <p>
            <input type="checkbox" id="arrangement"/>
            <label htmlFor="arrangement">Print Arrangement</label>
          </p>
          <p>
            <input type="checkbox" id="chords" />
            <label htmlFor="chords">Print Chords</label>
          </p>
          <p>
            <input type="checkbox" id="partnames" />
            <label htmlFor="partnames">Print Part Names</label>
          </p>
          <div className="input-field">
            <select><option value="16">16</option></select>
            <label>Text Size</label>
          </div>
        </div>
        <div className="card-action">
          <a>Generate Sheet</a>
          <a>Generate Preview</a>
        </div>
      </div>
    );
  }
}
