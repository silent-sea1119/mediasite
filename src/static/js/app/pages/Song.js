import React from 'react';
import MediasiteApi from '../api/MediasiteApi';

export default class Song extends React.Component {
  state = {
    songData: null,
    isLoading: true
  };

  componentDidMount() {
    MediasiteApi.getSongById(this.props.params.songId, (songData) => {
      this.setState({
        'songData': songData.data,
        isLoading: false
      });
    });
  }

  getSafeSongMarkup(songData) {
    if (songData) {
      return {
        __html:
          `<h2>${songData.Title}</h2>` +
          `<p>${songData.Author1}` + (songData.Author2 ? ` &amp; ${songData.Author2}` : ``) + `</p>` +
          `<p>Key: ${this.valueOrEmptyString(songData.SongKey)}</p>` +
          `<p>Style: ${this.valueOrEmptyString(songData.Style)}` +
          `<p>Uses: ${this.valueOrEmptyString(songData.Use1)}` + (songData.Use2 ? `, ${songData.Use2}` : ``) + `</p>` +
          `<p>Notes: ${this.valueOrEmptyString(songData.Notes)}</p>` +
          (songData.CCLI ? `<p>CCLI: <a target='_blank' href='http://ca.search.ccli.com/songs/${songData.CCLI}'>${songData.CCLI}</a></p>` : ``) +
          (songData.CopyDate ? `<p>Copyright: ${songData.CopyDate}</p>` : ``) +
          `<h3>Print Song Sheet:</h3><p>Someday...</p>` +
          (songData.YouTubeLink ?
            `<h3>YouTube</h3>
             <iframe class='youtube-video' src='http://www.youtube.com/embed/${songData.YouTubeLink}' frameborder='0'></iframe>` :
            ``)
      }
    } else {
      return {
        __html: '<h2>Loading...</h2>'
      }
    }
  }

  valueOrEmptyString(value) {
    return value ? value : '';
  }

  render() {
    return (
      <div
        className="song"
        dangerouslySetInnerHTML={this.getSafeSongMarkup(this.state.songData)}></div>
    );
  }
}
