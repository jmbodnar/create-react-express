export function jsonToDateString(dateJSON) {
  const date = new Date(dateJSON);
  return date.toLocaleDateString();
}

export function returnCurrentUser() {
  const currentUser = JSON.parse(sessionStorage.getItem("user"));
  return currentUser;
}
