export function jsonToDateString(dateJSON) {
  const date = new Date(dateJSON);
  return date.toLocaleDateString();
}

export function checkStorage(inputName) {
  let user = JSON.parse(sessionStorage.getItem(user));
  console.log(user);
}
