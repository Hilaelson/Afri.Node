export function saveToken(token) {
  localStorage.setItem("afrinode_token", token);
}
export function logout() {
  localStorage.removeItem("afrinode_token");
}
export function isLoggedIn() {
  return !!localStorage.getItem("afrinode_token");
}