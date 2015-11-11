import React from 'react';

import SongSheetConfigurator from '../components/SongSheetConfigurator';
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
          (songData.CopyDate ? `<p>Copyright: ${songData.CopyDate}</p>` : ``)
      }
    } else {
      return {
        __html: '<h2>Loading...</h2>'
      }
    }
  }

  getSafeYoutubeMarkup(songData) {
    if (songData) {
      if (songData.YouTubeLink) {
        let youtubeLink = `http://www.youtube.com/embed/${this.state.songData.YouTubeLink}`;
        return {
          __html:
            `<h3>YouTube</h3>
             <iframe class='youtube-video' src=${youtubeLink} frameborder='0'></iframe>`
        };
      }
    }
    return { __html: '' };
  }

  static valueOrEmptyString(value) {
    return value ? value : '';
  }

  render() {
    return (
      <div>
        <div
          className="song"
          dangerouslySetInnerHTML={this.getSafeSongMarkup(this.state.songData)}>
        </div>
        <h3>Print Song Sheet:</h3>
        <SongSheetConfigurator />
        <div
          dangerouslySetInnerHTML={this.getSafeYoutubeMarkup(this.state.songData)}>
        </div>
      </div>
    );
  }
}
