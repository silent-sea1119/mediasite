import React from 'react';

export const SongField = ({fieldValue, handleOnChange, fieldId, labelText, isRequired}) => {
  return (
    <div className="input-field col s12">
      { isRequired ?
        <input id={fieldId} type="text" className="validate" value={fieldValue} onChange={handleOnChange} required />
        : <input id={fieldId} type="text" className="validate" value={fieldValue} onChange={handleOnChange} />}
      <label htmlFor={fieldId}>{`${labelText} ${isRequired ? '*' : ''}`}</label>
    </div>
  );
};

export const SongCheckbox = ({fieldValue, handleOnChange, fieldId, labelText, isRequired}) => {
  return (
    <div className="input-field col s12" style={{ marginTop: '-10px', marginBottom: '35px' }}>
      <input id={fieldId} type="checkbox" className="filled-in" checked={fieldValue} onChange={handleOnChange} />
      <label htmlFor={fieldId}>{`${labelText} ${isRequired ? '*' : ''}`}</label>
    </div>
  );
};

export const DEFAULT_SONG_STATE = {
  isLoading: true,
  songKey: 'C',
  title: '',
  author1: '',
  author2: '',
  category: '',
  bibleReferences: '',
  tempo: '',
  bpm: '',
  inRotation: false,
  ccli: '',
  copyDate: '',
  youtubeLink: '',
  publisher: '',
  songOrder: '',
  externalUrl: '',
  notes: '',
  songPartData: []
};
