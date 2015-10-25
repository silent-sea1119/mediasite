import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link } from 'react-router';

import { Song, Login } from './pages/all';
import FilterableSongTable from './components/FilterableSongTable';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        {this.props.children}
      </div>
    );
  }
}

// <IndexRoute component={Login} />

ReactDOM.render((
  <Router>
    <Route path='/' component={App}>
      <IndexRoute component={FilterableSongTable} /> // path='songs'
      <Route path='song/:songId' component={Song} />
    </Route>
  </Router>
), document.getElementById('mediasite'));
