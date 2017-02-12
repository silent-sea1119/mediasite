import React from 'react';
import 'materialize-css';

export default class SearchBar extends React.Component {
  handleChange = () => {
    this.props.onUserInput(
      this.searchTextInput.value
    );
  };

  componentDidMount() {
    if (typeof Materialize.updateTextFields === 'function') {
      Materialize.updateTextFields();
    }
  }

  render() {
    return(
      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix">search</i>
          <input
              type="text"
              ref={input => this.searchTextInput = input}
              value={this.props.searchText}
              onChange={this.handleChange}
              id="search"
          />
          <label htmlFor="search">Search</label>
        </div>
      </div>
    );
  }
}
