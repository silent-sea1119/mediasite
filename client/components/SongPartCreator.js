import React from 'react';

import { decodeNoteLine, songParagraphToJson } from '../mediacodec/helpers.js';

export default class SongPartCreator extends React.Component {
  gatherSongData() {
    let songParts = [];
    for (let i = 1; i <= 8; i++) {
      const partName = this[`part${i}name`].value;
      const partData = this[`part${i}data`].value;
      if (!partData) break;
      songParts.push({
        partName,
        partData: songParagraphToJson(partData)
      });
    }

    return songParts.filter((part) => part.partName !== '');
  }

  hydrateSongData() {
    for (let i = 1; i <= this.props.songParts.length; i++) {
      const currentPart = this.props.songParts[i - 1];

      this[`part${i}name`].value = currentPart.partName;
      this[`part${i}data`].value = currentPart.partData.reduce((prevString, currentPart, index) => {
        let partData;
        if (currentPart.lyric !== null) {
          partData = currentPart.lyric;
        } else {
          partData = decodeNoteLine(currentPart.note)
        }
        return prevString + partData + '\n';
      }, '').replace(/\s+$/g, '');
    }
  }

  renderSongParts() {
    let songParts = [];
    for (let i = 1; i <= 8; i++) {
      songParts.push(
        <div className="row" key={`songPart${i}`}>
          <div className="input-field col m2 s12">
            <input id={`part${i}name`} type="text" className="validate" ref={(input) => this[`part${i}name`] = input} />
            <label htmlFor={`part${i}name`}>{`Part #${i} name`}</label>
          </div>
          <div className="input-field col m10 s12">
            <textarea id={`part${i}data`} className="materialize-textarea" style={{fontFamily: ["Courier New", "Courier", "mono"]}} ref={(input) => this[`part${i}data`] = input}></textarea>
            <label htmlFor={`part${i}data`}>{`Part #${i}:`}</label>
          </div>
        </div>
      );
    }
    return songParts;
  }

  componentDidMount() {
    this.hydrateSongData();
  }

  render() {
    return (
      <div>
        {this.renderSongParts()}
      </div>
    )
  }
}
