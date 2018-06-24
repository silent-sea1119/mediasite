import React from 'react';
import 'materialize-css';

import MediasiteApi from '../api/MediasiteApi';

import MaterializeSelect from '../components/materialize/Select';
import SongPartCreator from '../components/SongPartCreator';
import { DEFAULT_SONG_STATE, SongField, SongCheckbox } from '../components/SongField';
import { Transposer } from '../mediacodec/Transposer';

const MUSICAL_KEYS = Transposer.allKeys;

export default class EditSong extends React.Component {
  state = DEFAULT_SONG_STATE;

  componentDidMount() {
    if (this.props.match.params.songId) {
      MediasiteApi.getSongById(this.props.match.params.songId, (response) => {
        const songData = response.data;
        this.setState({
          songKey: songData.songKey,
          title: songData.title,
          author1: songData.author1,
          author2: songData.author2 || '',
          ccli: songData.ccli || '',
          copyDate: songData.copyDate || '',
          youtubeLink: songData.youtubeLink || '',
          publisher: songData.publisher || '',
          songOrder: songData.songOrder || '',
          externalUrl: songData.externalUrl || '',
          songPartData: songData.songData || {},
          notes: songData.notes || '',
          category: songData.category|| '',
          isLoading: false,
          inRotation: songData.inRotation || false,
          tempo: songData.tempo || '',
          bpm: songData.bpm || '',
          bibleReferences: songData.bibleReferences || ''
        });
        if (typeof Materialize.updateTextFields === 'function') {
          requestAnimationFrame(Materialize.updateTextFields);
        }
      });
    }
  }

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
      category: this.state.category,
      tempo: this.state.tempo,
      bpm: this.state.bpm,
      inRotation: this.state.inRotation,
      bibleReferences: this.state.bibleReferences,
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
    songObj.songId = this.props.match.params.songId;
    MediasiteApi.updateSong(songObj)
      .then((response) => {
        this.props.history.push(`/song/${response.data.songId}`);
      });
  }

  handleFormChange(event, stateKey) {
    const currentState = this.state;
    const target = event.target;
    currentState[stateKey] = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(currentState);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="progress">
            <div className="indeterminate"></div>
        </div>
      );
    }
    const keyOptions = MUSICAL_KEYS.map((key) => {
      return <option key={key} value={key}>{key}</option>;
    });
    const cancelButton = <button 
      className="btn btn-flat" 
      style={{marginLeft: '5px'}}
      onClick={() => {this.props.history.goBack();}}>
        Cancel
    </button>;
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <div className="card-title">{this.state.title === '' ? 'New Song' : this.state.title }</div>
            <form className="col s12" onSubmit={this.handleFormSubmit.bind(this)}>
              <SongField fieldId='title' fieldValue={this.state.title} handleOnChange={(event) => this.handleFormChange(event, 'title')} labelText='Title' isRequired={true} />
              <SongField fieldId='author1' fieldValue={this.state.author1} handleOnChange={(event) => this.handleFormChange(event, 'author1')} labelText='Author #1' isRequired={true} />
              <SongField fieldId='author2' fieldValue={this.state.author2} handleOnChange={(event) => this.handleFormChange(event, 'author2')} labelText='Author #2' />
              <SongCheckbox fieldId='inRotation' fieldValue={this.state.inRotation} handleOnChange={(event) => this.handleFormChange(event, 'inRotation')} labelText='In Rotation?' />
              <SongField fieldId='category' fieldValue={this.state.category} handleOnChange={(event) => this.handleFormChange(event, 'category')} labelText='Category' />
              <MaterializeSelect
                selectValue={this.state.songKey}
                options={keyOptions}
                label="Song Key"
                handleOnSelect={(event) => this.handleFormChange(event, 'songKey')}
              />
              <SongField fieldId='tempo' fieldValue={this.state.tempo} handleOnChange={(event) => this.handleFormChange(event, 'tempo')} labelText='Tempo (i.e. Fast, Slow, etc.)' />
              <SongField fieldId='bpm' fieldValue={this.state.bpm} handleOnChange={(event) => this.handleFormChange(event, 'bpm')} labelText='BPM' />
              <SongField fieldId='bibleReferences' fieldValue={this.state.bibleReferences} handleOnChange={(event) => this.handleFormChange(event, 'bibleReferences')} labelText='Bible References' />
              <SongField fieldId='ccli' fieldValue={this.state.ccli} handleOnChange={(event) => this.handleFormChange(event, 'ccli')} labelText='CCLI #' />
              <SongField fieldId='copyDate' fieldValue={this.state.copyDate} handleOnChange={(event) => this.handleFormChange(event, 'copyDate')} labelText='Copyright Date' />
              <SongField fieldId='youtubeLink' fieldValue={this.state.youtubeLink} handleOnChange={(event) => this.handleFormChange(event, 'youtubeLink')} labelText='YouTube Link' />
              <SongField fieldId='publisher' fieldValue={this.state.publisher} handleOnChange={(event) => this.handleFormChange(event, 'publisher')} labelText='Publisher' />
              <SongField fieldId='songOrder' fieldValue={this.state.songOrder} handleOnChange={(event) => this.handleFormChange(event, 'songOrder')} labelText='Song Order/Arrangement' />
              <SongField fieldId='externalUrl' fieldValue={this.state.externalUrl} handleOnChange={(event) => this.handleFormChange(event, 'externalUrl')} labelText='External URL' />
              <SongField fieldId='notes' fieldValue={this.state.notes} handleOnChange={(event) => this.handleFormChange(event, 'notes')} labelText='Notes' />
              <input className="btn" type="submit" />
              {cancelButton}
            </form>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-title">Song Information</div>
            <form onSubmit={this.handleFormSubmit.bind(this)}>
              <SongPartCreator songParts={this.state.songPartData.parts || []} ref={(input) => this.songPartData = input}></SongPartCreator>
              <input className="btn" type="submit" />
              {cancelButton}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
