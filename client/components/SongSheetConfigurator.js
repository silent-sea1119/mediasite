import React from 'react';

import MaterializeSelect from './materialize/Select';

const MUSICAL_KEYS = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const TEXT_SIZES = [10, 11, 12, 13, 14, 15, 16, 18, 20, 24];

export default class SongSheetConfigurator extends React.Component {
  state = {
    songKey: '',
    textSize: 14
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
    this.props.history.push(this.calculateSongUrl());
  };

  handleGeneratePreview = (event) => {
    event.preventDefault();
    this.props.history.push(this.calculatePreviewUrl());
  };

  updateChosenSongKey = (event) => {
    const newKey = event.target.value;
    this.setState({ songKey: newKey });
  };

  updateChosenTextSize = (event) => {
    const newTextSize = event.target.value;
    this.setState({ textSize: newTextSize });
  }

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
            handleOnSelect={this.updateChosenTextSize}
          />
          <p>
            <input ref={(input) => this.arrangement = input} defaultChecked type="checkbox" id="arrangement" className="filled-in"/>
            <label htmlFor="arrangement">Print Arrangement</label>
          </p>
          <p>
            <input ref={(input) => this.chords = input} type="checkbox" defaultChecked id="chords" className="filled-in"/>
            <label htmlFor="chords">Print Chords</label>
          </p>
          <p>
            <input ref={(input) => this.partNames = input} type="checkbox" defaultChecked id="partnames" className="filled-in"/>
            <label htmlFor="partnames">Print Part Names</label>
          </p>
        </div>
        <div className="card-action">
          <a onClick={this.handleGenerateSheet} href="#">Generate Sheet</a>
          <a onClick={this.handleGeneratePreview} href="#">Generate Preview</a>
        </div>
      </div>
    );
  }
}
