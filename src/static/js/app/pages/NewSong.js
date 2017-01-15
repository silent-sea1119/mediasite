import React from 'react';
import { browserHistory } from 'react-router';
import 'materialize-css';

import MediasiteApi from '../api/MediasiteApi';

import MaterializeSelect from '../components/materialize/Select';
import SongPartCreator from '../components/SongPartCreator';
import SongField from '../components/SongField';

const MUSICAL_KEYS = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const TEXT_SIZES = [10, 11, 12, 13, 14, 15, 16, 18, 20, 24];

export default class EditSong extends React.Component {
  state = {
    isLoading: true,
    songKey: 'C',
    title: '',
    author1: '',
    author2: '',
    ccli: '',
    copyDate: '',
    youtubeLink: '',
    publisher: '',
    songOrder: '',
    externalUrl: '',
    notes: '',
    songKey: '',
    songPartData: []
  };

  gatherSongData() {
    const parts = this.songPartData.gatherSongData();
    return { parts };
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const songObj = {
      title: this.state.title,
      author1: this.state.author1,
      author2: this.state.author2,
      ccli: this.state.ccli,
      copyDate: this.state.copyDate,
      youtubeLink: this.state.youtubeLink,
      publisher: this.state.publisher,
      songOrder: this.state.songOrder,
      externalUrl: this.state.externalUrl,
      songKey: this.state.songKey,
      notes: this.state.notes,
      songData: this.gatherSongData()
    };
    MediasiteApi.createSong(songObj, (response) => {
      browserHistory.push(`/song/${response.data.songId}`);
    });
  }

  handleFormChange(event, stateKey) {
    let currentState = this.state;
    currentState[stateKey] = event.target.value;
    this.setState(currentState);
  }

  updateChosenSongKey(event) {
    const newKey = event.target.value;
    this.setState({ songKey: newKey });
  };

  render() {
    const keyOptions = MUSICAL_KEYS.map((key) => {
      return <option key={key} value={key}>{key}</option>;
    });
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <div className="card-title">{this.state.title === '' ? 'New Song' : this.state.title }</div>
            <form className="col s12" onSubmit={this.handleFormSubmit.bind(this)}>
              <div className="input-field col s12">
                <input id="title" type="text" className="validate" value={this.state.title} onChange={(event) => this.handleFormChange(event, 'title')} required />
                <label htmlFor="title">Title</label>
              </div>
              <div className="input-field col s12">
                <input id="author1" type="text" className="validate" value={this.state.author1} onChange={(event) => this.handleFormChange(event, 'author1')} required />
                <label htmlFor="author1">Author #1</label>
              </div>
              <div className="input-field col s12">
                <input id="author2" type="text" className="validate" value={this.state.author2} onChange={(event) => this.handleFormChange(event, 'author2')}/>
                <label htmlFor="author2">Author #2</label>
              </div>
              <MaterializeSelect
                selectValue={this.state.songKey}
                options={keyOptions}
                label="Song Key"
                handleOnSelect={(event) => this.handleFormChange(event, 'songKey')}
              />
              <div className="input-field col s12">
                <input id="ccli" type="text" className="validate" value={this.state.ccli} onChange={(event) => this.handleFormChange(event, 'ccli')}/>
                <label htmlFor="ccli">CCLI #</label>
              </div>
              <div className="input-field col s12">
                <input id="copyDate" type="text" className="validate" value={this.state.copyDate} onChange={(event) => this.handleFormChange(event, 'copyDate')}/>
                <label htmlFor="copyDate">Copyright Date</label>
              </div>
              <div className="input-field col s12">
                <input id="youtubeLink" type="text" className="validate" value={this.state.youtubeLink} onChange={(event) => this.handleFormChange(event, 'youtubeLink')}/>
                <label htmlFor="youtubeLink">YouTube Link</label>
              </div>
              <div className="input-field col s12">
                <input id="publisher" type="text" className="validate" value={this.state.publisher} onChange={(event) => this.handleFormChange(event, 'publisher')}/>
                <label htmlFor="publisher">Publisher</label>
              </div>
              <div className="input-field col s12">
                <input id="songOrder" type="text" className="validate" value={this.state.songOrder} onChange={(event) => this.handleFormChange(event, 'songOrder')}/>
                <label htmlFor="arrangement">Song Order/Arrangement</label>
              </div>
              <div className="input-field col s12">
                <input id="externalUrl" type="text" className="validate" value={this.state.externalUrl} onChange={(event) => this.handleFormChange(event, 'externalUrl')}/>
                <label htmlFor="externalUrl">External URL</label>
              </div>
              <SongField fieldId='notes' fieldValue={this.state.notes} handleOnChange={(event) => this.handleFormChange(event, 'notes')} labelText='Notes' />
              <input className="btn" type="submit" />
            </form>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-title">Song Information</div>
            <form onSubmit={this.handleFormSubmit.bind(this)}>
              <SongPartCreator songParts={this.state.songPartData.parts || []} ref={(input) => this.songPartData = input}></SongPartCreator>
              <input className="btn" type="submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
