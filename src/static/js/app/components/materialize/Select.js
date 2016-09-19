import React from 'react';

class MaterializeSelect extends React.Component {
  render() {
    const {options, label, selectValue, handleOnSelect} = this.props;
    return (
      <div>
        <label>{label}</label>
        <select className="browser-default" defaultValue={selectValue} onChange={handleOnSelect}>
          {options}
        </select>
      </div>
    )
  };
}

export default MaterializeSelect;
