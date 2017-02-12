import React from 'react';

const SongField = ({fieldValue, handleOnChange, fieldId, labelText}) => {
  return (
    <div className="input-field col s12">
      <input id={fieldId} type="text" className="validate" value={fieldValue} onChange={handleOnChange}/>
      <label htmlFor={fieldId}>{labelText}</label>
    </div>
  );
}

export default SongField;
