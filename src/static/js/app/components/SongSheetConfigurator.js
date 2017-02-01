import React from 'react';
import { browserHistory } from 'react-router';

import MaterializeSelect from './materialize/Select';

const MUSICAL_KEYS = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const TEXT_SIZES = [16, 18, 20, 24]; // unused for now 10, 11, 12, 13, 14, 15,

export default class SongSheetConfigurator extends React.Component {
  state = {
    songKey: '',
    textSize: 16
  };

  componentWillMount() {
    this.setState({
      songKey: this.props.songKey
    });
  }

  calculateSongUrl() {
    return `/song/${this.props.songId}/print?songKey=${this.state.songKey}&textSize=${this.state.textSize}&printArrangements=${this.arrangement.checked}&printChords=${this.chords.checked}&printPartNames=${this.partNames.checked}`;
  }

  calculatePreviewUrl() {
    return this.calculateSongUrl() + '&preview=true';
  }

  handleGenerateSheet = (event) => {
    event.preventDefault();
    browserHistory.push(this.calculateSongUrl());
  };

  handleGeneratePreview = (event) => {
    event.preventDefault();
    browserHistory.push(this.calculatePreviewUrl());
  };

  updateChosenSongKey = (event) => {
    const newKey = event.target.value;
    this.setState({ songKey: newKey });
  };

  render() {
    const keyOptions = MUSICAL_KEYS.map((key) => {
      return <option key={key} value={key}>{key}</option>;
    });
    const textSizeOptions = TEXT_SIZES.map((size) => {
      return <option key={size} value={size}>{size}</option>;
    });

    return (
      <div className="card">
        <div className="card-content">
          <div className="card-title">Print Song Sheet:</div>
          <MaterializeSelect
            selectValue={this.state.songKey}
            options={keyOptions}
            label="Song Key"
            handleOnSelect={this.updateChosenSongKey}
          />
          <MaterializeSelect
            selectValue={this.state.textSize}
            options={textSizeOptions}
            label="Text Size"
          />
          <p>
            <input ref={(input) => this.arrangement = input} defaultChecked type="checkbox" id="arrangement"/>
            <label htmlFor="arrangement">Print Arrangement</label>
          </p>
          <p>
            <input ref={(input) => this.chords = input} type="checkbox" defaultChecked id="chords" />
            <label htmlFor="chords">Print Chords</label>
          </p>
          <p>
            <input ref={(input) => this.partNames = input} type="checkbox" defaultChecked id="partnames" />
            <label htmlFor="partnames">Print Part Names</label>
          </p>
        </div>
        <div className="card-action">
          <a onClick={this.handleGenerateSheet} href={this.calculateSongUrl}>Generate Sheet</a>
          <a onClick={this.handleGeneratePreview} href={this.calculatePreviewUrl}>Generate Preview</a>
        </div>
      </div>
    );
  }
}
