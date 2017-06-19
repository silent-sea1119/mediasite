import React from 'react';
import withRouter from 'react-router/lib/withRouter';

import MaterializeSelect from './materialize/Select';
import { Transposer } from '../mediacodec/Transposer';

const MUSICAL_KEYS = Transposer.allKeys;
const TEXT_SIZES = [10, 11, 12, 13, 14, 15, 16, 18, 20, 24];

class SongOptions extends React.Component {
  updateSongParameters = (songKey, textSize, vocalistMode) => {
    this.props.router.push(`/song/${this.props.songId}/print?songKey=${songKey.replace(/#/g, '%23')}&textSize=${textSize}&vocalistMode=${vocalistMode}`);
  }

  updateChosenSongKey = (event) => {
    const newKey = event.target.value;
    this.updateSongParameters(newKey, this.props.textSize, this.vocalistMode.checked);
  }

  updateChosenTextSize = (event) => {
    const newTextSize = event.target.value;
    this.updateSongParameters(this.props.songKey, newTextSize, this.vocalistMode.checked);
  }

  updateVocalistMode = () => {
    this.updateSongParameters(this.props.songKey, this.props.textSize, this.vocalistMode.checked);
  }

  buildCheckbox(vocalistMode) {
    if (vocalistMode === "true") {
      return <input 
        ref={(input) => this.vocalistMode = input} 
        type="checkbox" 
        id="vocalists" 
        className="filled-in"
        defaultChecked
        onClick={() => this.updateVocalistMode()} />;
    } else {
      return <input 
        ref={(input) => this.vocalistMode = input} 
        type="checkbox" 
        id="vocalists" 
        className="filled-in"
        onClick={() => this.updateVocalistMode()} />;
    }
  }

  render() {
    const {songKey, textSize, vocalistMode} = this.props;

    const keyOptions = MUSICAL_KEYS.map((key) => {
      return <option key={key} value={key}>{key}</option>;
    });
    const textSizeOptions = TEXT_SIZES.map((size) => {
      return <option key={size} value={size}>{size}</option>;
    });

    let checkBox = this.buildCheckbox(vocalistMode);

    return (
      <div className="row hide-on-small-only no-print" style={{position: 'fixed', right: 0}} ref={(comp) => this.wholeComp = comp}>
        <div className="col" style={{width: '200px'}}>
          <div className="card-panel">
            <p>
              Song Options
              <i className="material-icons hover-pointer" onClick={() => this.wholeComp.style.display = 'none'} style={{float: 'right'}}>close</i>
            </p>
            <MaterializeSelect
              selectValue={songKey}
              options={keyOptions}
              label="Song Key"
              handleOnSelect={this.updateChosenSongKey}
            />
            {/*<div>*/}
              {/*<i className="material-icons hover-pointer" onClick={() => this.stepKey(-1)}>keyboard_arrow_left</i>*/}
              {/*<i className="material-icons hover-pointer" onClick={() => this.stepKey(1)}>keyboard_arrow_right</i>*/}
            {/*</div>*/}
            <MaterializeSelect
              selectValue={textSize}
              options={textSizeOptions}
              label="Text Size"
              handleOnSelect={this.updateChosenTextSize}
            />
            {/*<div>*/}
              {/*<i className="material-icons hover-pointer" onClick={() => this.stepFontSize(1)}>add</i>*/}
              {/*<i className="material-icons hover-pointer" onClick={() => this.stepFontSize(-1)}>remove</i>*/}
            {/*</div>*/}
            <p>
              {checkBox}
              <label htmlFor="vocalists">Vocalist Mode</label>
            </p>
          </div>
        </div>
      </div>
    );
  }

  stepKey = (amount) => {
    const currentKeyIndex = MUSICAL_KEYS.indexOf(this.props.songKey);
    const possibleNewKeyIndex = currentKeyIndex + amount;
    if (amount === -1) {
      if (currentKeyIndex === 0) {
        this.updateSongParameters(MUSICAL_KEYS[MUSICAL_KEYS.length + amount], this.props.textSize);
      } else {
        this.updateSongParameters(MUSICAL_KEYS[possibleNewKeyIndex], this.props.textSize);
      }
    } else {
      if (currentKeyIndex === (MUSICAL_KEYS.length - 1)) {
        this.updateSongParameters(MUSICAL_KEYS[0], this.props.textSize);
      } else {
        this.updateSongParameters(MUSICAL_KEYS[possibleNewKeyIndex], this.props.textSize);
      }
    }
  }
}

export default withRouter(SongOptions);
