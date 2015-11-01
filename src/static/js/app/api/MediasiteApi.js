import 'fetch';

export default class MediasiteApi {
  static getSongs(searchText, callback) {
    fetch(`/api/v1/songs/get/?searchText=${searchText}`)
      .then((response) => response.json())
      .then((jsonData) => callback(jsonData));
  }

  static getSongById(songId, callback) {
    fetch(`/api/v1/song/get/${songId}`)
      .then((response) => response.json())
      .then((jsonData) => callback(jsonData));
  }

  static getUserInfo(userId, callback) {
    fetch(`/api/v1/user/get/${userId}`)
      .then((response) => response.json())
      .then((jsonData) => callback(jsonData));
  }

  static login(userId, callback) {
    fetch('/api/v1/user/login/', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'userId': userId
      })
    })
      .then((response) => response.json())
      .then((jsonData) => callback(jsonData));
  }
}
