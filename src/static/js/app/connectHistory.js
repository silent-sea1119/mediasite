import React from 'react';
import { History } from 'react-router';

export default function connectHistory(Component) {
  return React.createClass({
    mixins: [ History ],
    render() {
      return <Component {...this.props} history={this.history} />
    }
  })
}
