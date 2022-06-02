const key = "@tads:token";

export function saveToken(token) {
  localStorage.setItem(key, JSON.stringify(token));
}

export function getToken() {
  const token = localStorage.getItem(key);
  return JSON.parse(token);
}

export function removeToken() {
  localStorage.removeItem(key);
}

export function clearStorage() {
  localStorage.clear();
}
