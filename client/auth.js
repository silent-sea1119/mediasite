import MediasiteApi from './api/MediasiteApi';

export default {
  login(userId) {
    localStorage.userId = userId;
  },

  getUserID() {
    return localStorage.userId;
  },

  logout(cb) {
    delete localStorage.userId;
  },

  loggedIn() {
    return !!this.getUserID();
  }
}
