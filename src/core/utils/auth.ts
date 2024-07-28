export function isThatMe() {
  const url = 'https://checkip.amazonaws.com/';
  return fetch(url)
    .then((response) => response?.text())
    .then((text) => text?.trim())
    .then((ip) => {
      return ip === "213.24.125.213";
    });
}
