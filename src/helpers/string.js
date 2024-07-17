export function saveArrayToLocalStorage(key, array) {
  const jsonString = JSON.stringify(array)
  localStorage.setItem(key, jsonString)
}

export function getArrayToLocalStorage(key) {
  const jsonString = localStorage.getItem(key)
  return jsonString ? JSON.parse(jsonString) : null
}