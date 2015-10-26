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

  static login(email, password, callback) {
    fetch('/api/v1/user/login/', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'email': email,
        'password': password
      })
    })
      .then((response) => response.json())
      .then((jsonData) => callback(jsonData));
  }
}
