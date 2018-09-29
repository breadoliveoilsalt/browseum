
//// ERROR HANDLING ////
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

//// CURRENT ART OBJECT HANDLING ////
export function loadCurrentArtObject(record) {
  return ({
    type: 'LOAD_ART_OBJECT',
    payload: record
  })
}

//// FAVORITES HANDLING ////
export function reloadFavorites(data) {
  return ({
    type: "RELOAD_FAVORITES",
    payload: data
  })
}

export function addToStateFavorites(record) {
  return ({
    type: 'ADD_TO_STATE_FAVORITES',
    payload: record
  })
}

//// HISTORY HANDLING ////
export function addToSessionHistory(record){
  return ({
    type: 'ADD_TO_SESSION_HISTORY',
    payload: record
  })
}

export function reloadSessionHistory(data) {
  return ({
    type: 'RELOAD_SESSION_HISTORY',
    payload: data
  })
}

export function loadExtendedHistory(records) {
  return ({
    type: 'LOAD_EXTENDED_HISTORY',
    payload: records
  })
}

export function resetExtendedHistory() {
  return ({
    type: 'RESET_EXTENDED_HISTORY'
  })
}
