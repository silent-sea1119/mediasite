
export default {
  login(userId, email) {
    localStorage.userId = userId;
    localStorage.email = email;
  },

  getUserID() {
    return localStorage.userId;
  },

  logout() {
    delete localStorage.userId;
  },

  loggedIn() {
    return !!this.getUserID();
  },

  canAddSongs() {
    return [
      'menello@gmail.com'
    ].indexOf(localStorage.email) > -1;
  }
}
