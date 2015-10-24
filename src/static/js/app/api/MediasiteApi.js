import 'fetch';

export default class MediasiteApi {
  static getSongs(filterText, callback) {
    fetch(`/api/v1/songs/get/?filterText=${filterText}`)
      .then((response) => response.json())
      .then((jsonData) => callback(jsonData));
  }
}
