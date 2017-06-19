import React from 'react';
import browserHistory from 'react-router/lib/browserHistory';

import MaterializeSelect from './materialize/Select';
import { Transposer } from '../mediacodec/Transposer';

const MUSICAL_KEYS = Transposer.allKeys;
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
    let songKey = this.state.songKey;
    songKey = songKey.replace(/#/g, '%23');
    return `/song/${this.props.songId}/print?songKey=${songKey}&textSize=${this.state.textSize}&vocalistMode=${this.vocalistMode.checked}`;
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
    browserHistory.replace(`/song/${this.props.songId}?key=${newKey.replace(/#/g, '%23')}`);
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
            <input ref={(input) => this.vocalistMode = input} type="checkbox" id="vocalists" className="filled-in"/>
            <label htmlFor="vocalists">Vocalist Mode</label>
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
