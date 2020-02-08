export const fakeAuth = {
  isAuthenticated() {
    return JSON.parse(localStorage.getItem("isAuthenticated"));
  },
  authenticated(cb) {
    localStorage.setItem("isAuthenticated", "true");
    setTimeout(cb, 1000); // Fake an async call
  },
  signout(cb) {
    localStorage.setItem("isAuthenticated", "false");
    setTimeout(cb, 1000); // Fake an async call
  }
};
