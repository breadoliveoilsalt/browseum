//// COPIED ////
export function loadError(message) {
  return {
    type: 'LOAD_ERROR',
    message: message
  }
}

export function removeError() {
  return {
    type: 'REMOVE_ERROR'
  }
}
