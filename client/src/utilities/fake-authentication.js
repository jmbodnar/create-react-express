export const fakeAuth = {
  isAuthenticated() {
    return JSON.parse(sessionStorage.getItem("isAuthenticated"));
  },
  authenticated(cb) {
    sessionStorage.setItem("isAuthenticated", "true");
    setTimeout(cb, 1000); // Fake an async call
  },
  signout(cb) {
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("user");
    setTimeout(cb, 1000); // Fake an async call
  }
};
