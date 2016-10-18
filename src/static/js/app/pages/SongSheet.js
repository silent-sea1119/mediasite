import React from 'react';
import { withRouter } from "react-router";

import MaterializeSelect from '../components/materialize/Select';

import { Song } from '../mediacodec/Song.js';

class SongSheet extends React.Component {
  componentDidMount() {
    console.log(this.props.location.query);
    const aLivingHope = new Song(3708, 'A Living Hope', 'G', "{}");
  }

  render() {
    const { songKey, textSize } = this.state;

    return (
      <div>
        <div dangerouslySetInnerHTML={{__html: songer ? songer.toHtml(this.state.songKey) : ''}}></div>
      </div>
    )
  }
};

export default withRouter(SongSheet);
