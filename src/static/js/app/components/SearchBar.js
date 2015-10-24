import React from 'react';

export default class SearchBar extends React.Component {
  handleChange = (e) => {
    this.props.onUserInput(
      this.refs.filterTextInput.value
    );
  }
  render() {
    return(
      <form>
        <div className="form-group">
          <input
              type="text"
              placeholder="Search..."
              ref="filterTextInput"
              value={this.props.filterText}
              onChange={this.handleChange}
              className="form-control"
          />
        </div>
      </form>
    );
  }
}
