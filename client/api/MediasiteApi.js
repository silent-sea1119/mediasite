export default class MediasiteApi {
  static addUserTracking(songData) {
    return {...songData, userId: localStorage.userId};
  }

  static trackSongSheetGeneration(songId) {
    return fetch(`/api/v1/song/${songId}/track/`, { method: 'PUT' })
      .then(response => response.json())
      .catch(err => console.log("Couldn't reach the server for some reason: ", err));
  }

  static getSongs(searchText, callback) {
    fetch(`/api/v1/songs/get/?searchText=${searchText}`)
      .then((response) => response.json())
      .then((jsonData) => callback(jsonData));
  }

  static getSongById(songId, callback) {
    fetch(`/api/v1/song/${songId}`)
      .then((response) => response.json())
      .then((jsonData) => callback(jsonData));
  }

  static createSong(songData) {
    songData = MediasiteApi.addUserTracking(songData);
    return fetch(`/api/v1/song/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(songData)
    })
      .then((response) => response.json());
  }

  static updateSong(songData) {
    songData = MediasiteApi.addUserTracking(songData);
    return fetch(`/api/v1/song/${songData.songId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(songData)
    })
      .then((response) => response.json());
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
