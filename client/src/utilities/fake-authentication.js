export const fakeAuth = {
  isAuthenticated() {
    return JSON.parse(sessionStorage.getItem("isAuthenticated"));
  },
  authenticated(cb) {
    sessionStorage.setItem("isAuthenticated", "true");
    setTimeout(cb, 1000); // Fake an async call
  },
  signout(cb) {
    sessionStorage.setItem("isAuthenticated", "false");
    setTimeout(cb, 1000); // Fake an async call
  }
};
