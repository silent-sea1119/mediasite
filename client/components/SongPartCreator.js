import React from 'react';

import autosize from 'autosize';

import { decodeNoteLine, songParagraphToJson } from '../mediacodec/helpers.js';
import { Song } from '../mediacodec';

const SongPreview = ({ songPartName, songData }) => {
  const song = new Song('na', 'na', 'B', {parts: [{ partName: songPartName, partData: songParagraphToJson(songData) }]});

  return (
    <div dangerouslySetInnerHTML={{__html: song.toHtml('B', '16')}} />
  );
};

export default class SongPartCreator extends React.Component {
  state = {
    part1data: '',
    part2data: '',
    part3data: '',
    part4data: '',
    part5data: '',
    part6data: '',
    part7data: '',
    part8data: '',
    part1name: '',
    part2name: '',
    part3name: '',
    part4name: '',
    part5name: '',
    part6name: '',
    part7name: '',
    part8name: '',
  };

  gatherSongData() {
    let songParts = [];
    for (let i = 1; i <= 8; i++) {
      const partName = this.state[`part${i}name`];
      const partData = this.state[`part${i}data`];
      if (!partData) break;
      songParts.push({
        partName,
        partData: songParagraphToJson(partData)
      });
    }

    return songParts.filter((part) => part.partName !== '');
  }

  hydrateSongData() {
    const songParts = {};
    for (let i = 1; i <= this.props.songParts.length; i++) {
      const currentPart = this.props.songParts[i - 1];

      songParts[`part${i}name`] = currentPart.partName;
      songParts[`part${i}data`] = currentPart.partData.reduce((prevString, currentPart) => {
        let partData;
        if (currentPart.lyric !== null) {
          partData = currentPart.lyric;
        } else {
          partData = decodeNoteLine(currentPart.note)
        }
        return prevString + partData + '\n';
      }, '').replace(/\s+$/g, '');
    }
    this.setState(songParts);
  }

  handleInputChange(event, stateKey) {
    const state = this.state;
    state[stateKey] = event.target.value;
    this.setState(state);
  }

  renderSongParts() {
    let songParts = [];
    for (let i = 1; i <= 8; i++) {
      songParts.push(
        <div className="collector" key={`songPartCollector${i}`}>
          <h5>Part {i}</h5>
          <div className="row">
            <div className="input-field col m2 s12">
              <input
                id={`part${i}name`}
                type="text"
                className="validate"
                value={this.state[`part${i}name`]}
                onChange={(event) => this.handleInputChange(event, `part${i}name`)}
              />
              <label htmlFor={`part${i}name`}>Title</label>
            </div>
            <div className="input-field col m10 s12">
              <textarea
                id={`part${i}data`}
                className="materialize-textarea"
                style={{fontFamily: ["Courier New", "Courier", "mono"]}}
                value={this.state[`part${i}data`]}
                onChange={(event) => this.handleInputChange(event, `part${i}data`)}
              />
              <label htmlFor={`part${i}data`}>Notes and Lyrics</label>
            </div>
          </div>
          { this.state[`part${i}name`] || this.state[`part${i}data`] ?
          <div className="row">
            <div className="input-field col m2 s12">
              <p className="preview-text">Preview:</p>
            </div>
            <div className="input-field col m10 s12">
              <SongPreview songPartName={this.state[`part${i}name`]} songData={this.state[`part${i}data`]} />
            </div>
          </div>
            : '' }
        </div>
      );
    }
    return songParts;
  }

  componentDidMount() {
    this.hydrateSongData();
    requestAnimationFrame(() => autosize(document.querySelectorAll('textarea')));
  }

  render() {
    return (
      <div>
        {this.renderSongParts()}
      </div>
    )
  }
}
