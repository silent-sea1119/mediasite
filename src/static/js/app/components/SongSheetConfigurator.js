import React from 'react';
import 'materialize-css';
import MaterializeSelect from './materialize/Select';

const MUSICAL_KEYS = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const TEXT_SIZES = [10, 11, 12, 13, 14, 15, 16, 18, 20, 24];

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

  handleGenerateSheet = () => {
    console.log(
      'Arrangements will be printed: ' + this.refs.arrange.checked,
      'Chords will be printed: ' + this.refs.chords.checked,
      'Part names will be printed: ' + this.refs.partNames.checked,
      'The song key will be: ' + this.state.songKey,
      'The text size will be: ' + this.state.textSize
    );
  };

  updateChosenSongKey = (event) => {
    const newKey = event.target.value;
    console.log(event.target.value);
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
            <input ref="arrangement" defaultChecked type="checkbox" id="arrangement"/>
            <label htmlFor="arrangement">Print Arrangement</label>
          </p>
          <p>
            <input ref="chords" type="checkbox" defaultChecked id="chords" />
            <label htmlFor="chords">Print Chords</label>
          </p>
          <p>
            <input ref="partNames" type="checkbox" defaultChecked id="partnames" />
            <label htmlFor="partnames">Print Part Names</label>
          </p>
        </div>
        <div className="card-action">
          <a onClick={this.handleGenerateSheet}>Generate Sheet</a>
          <a>Generate Preview</a>
        </div>
      </div>
    );
  }
}
