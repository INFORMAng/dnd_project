export enum LOCAL_STORAGE_KEYS {
  CHARS = 'localCharsData',
  MARKERS = 'localMarkersData'
}

export function saveArrayToLocalStorage(key, array) {
  const jsonString = JSON.stringify(array)
  localStorage.setItem(key, jsonString)
}

export function getArrayFromLocalStorage(key) {
  const jsonString = localStorage.getItem(key)
  return jsonString ? JSON.parse(jsonString) : null
}

