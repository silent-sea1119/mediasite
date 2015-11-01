import MediasiteApi from './api/MediasiteApi';

export default {
  login(userId, cb) {
    cb = arguments[arguments.length - 1];
    if (localStorage.token) {
      if (cb) {
        cb(true);
      }
      this.onChange(true);
      return;
    }

    if (userId === undefined) {
      this.onChange(false);
      if (cb) {
        cb(false);
      }
      return;
    }

    MediasiteApi.login(userId, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token;
        localStorage.userId = userId;
        if (cb) {
          cb(true);
        }
        this.onChange(true);
      } else {
        if (cb) {
          cb(false);
        }
        this.onChange(false);
      }
    })
  },

  getToken() {
    return localStorage.token;
  },

  logout(cb) {
    delete localStorage.token;
    delete localStorage.userId;
    this.onChange(false);
    if (cb) {
      cb(false);
    }
  },

  loggedIn() {
    return !!localStorage.token;
  },

  onChange() {}
}
