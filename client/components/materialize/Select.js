import React from 'react';

const MaterializeSelect = ({options, label, selectValue, handleOnSelect}) => {
  // Put an empty option on
  options.unshift(<option key='empty' value=''></option>);

  return (
    <div style={{ marginBottom: '10px' }}>
      <label>{label}</label>
      <select className="browser-default" defaultValue={selectValue} onChange={handleOnSelect}>
        {options}
      </select>
    </div>
  )
};

export default MaterializeSelect;
