import fetch from 'isomorphic-fetch'
import { loadCurrentArtObject } from './helperActions'

  // This sends the COA to the Rails API DB and returns an id from the database, which is then assigned to the COA
export function postInitialObjectData(record) {
    // Notice: that if I wrap a function in dispatch in mapPropsToDispatch...
        // postInitialObjectData: (data) => dispatch(postInitialObjectData(data))
    // ...then thunkage still works and I still get access to getState if inserted
    // as a second argument below.
  return function(dispatch) {
    return fetch("/api/artobjects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record)
      })
    .then(res => res.json())
    .then(res => {
      if (res.errors) {
        console.log("There were some errors with the server:", res.errors)
        throw res.errors
      } else {
        console.log("Assigning id to the CAO:", res.id)
        return res
    }})
  }
}

export function postUpdate(id, data) {
  return function(dispatch){
    return fetch(`/api/artobjects/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
        })
    .then(res => {
      console.log("Response from DB on postUpdate:", res)
        // I think i need to "return res" in order to use postUpdate (which is a promise)
        // in another promise -- addToFavoritesClicked.  Note I had to do this above in postInitialObjectData
      return res})
  }
}

  // Once a piece of art is "favorited" or "unfavorited", this updates the
  // currentArtObject in the store/state and updates all instances
  // of the art object in the sessionHistory to avoid any confusion as to whether
  // the art object is favorited or not.
export function updateSessionObjects(id, data) {
  return function(dispatch, getState) {
    const { currentArtObject, sessionHistory } = getState()

      // Update the COA in the store/state
    if (currentArtObject.id === id) {
      const copyOfCOA = Object.assign({}, currentArtObject, data)
      dispatch(loadCurrentArtObject(copyOfCOA))
    }
      // Update all copies of the COA in the sessionHistory
    const copyOfSessionHistory = [...sessionHistory]
    copyOfSessionHistory.forEach( (e) => {
      if (e.id === id) {
        return Object.assign(e, data)
      }
    })
    dispatch(reloadSessionHistory(copyOfSessionHistory))
  }

}

// function updateCurrentArtObject(data) {
//   return ({
//     type: 'UPDATE_COA',
//     payload: data
//   })
// }

function reloadSessionHistory(data) {
  return ({
    type: 'RELOAD_SESSION_HISTORY',
    payload: data
  })
}
