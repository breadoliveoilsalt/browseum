import fetch from 'isomorphic-fetch'
import { loadCurrentArtObject, reloadFavorites, loadExtendedHistory, reloadSessionHistory } from './basicActionCreators'

//// SEND RECORD TO RAILS API DB FOR ID ////
//// RETURNS FULL RECORD FOR THUNKS IN harvardApiThunks TO LOAD INTO STORE/STATE ////
export function postInitialObjectData(record) {
    // Notice: In a component, if I wrap a function in dispatch in mapPropsToDispatch...
        // [For example: postInitialObjectData: (data) => dispatch(postInitialObjectData(data))]
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
        return res
    }})
  }
}

//// GET FAVORITES FROM RAILS API DB ////
export function getFavorites() {
  return function(dispatch) {
    return fetch('/api/artobjects/favorites')
    .then(response => response.json())
    .then(response => dispatch(reloadFavorites(response)))
  }
}

//// GET EXTENDED HISTORY FROM RAILS API DB ////
export function get30DayHistory() {
  return function(dispatch) {
    return fetch('/api/artobjects')
    .then(res => res.json())
    .then(res => {
      dispatch(loadExtendedHistory(res))
    })
  }
}

//// HELPER FUNCTIONS ////

  // Updates Rails API DB on "favorited/unfavorited" and "lastViewed"
export function postUpdate(id, data) {
  return function(dispatch){
    return fetch(`/api/artobjects/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
        })
    .then(res => res)
  }
}

  // Updates the currentArtObject and sessionHistory in store/state
  // on "favorited/unfavorited" and "lastViewed"
export function updateSessionObjects(id, data) {
  return function(dispatch, getState) {
    const { currentArtObject, sessionHistory } = getState()

      // Update the COA in the store/state
    if (currentArtObject.id === id) {
      const copyOfCOA = Object.assign({}, currentArtObject, data)
      dispatch(loadCurrentArtObject(copyOfCOA))
    }
      // Update all copies of the COA in the sessionHistory store/state
    const copyOfSessionHistory = [...sessionHistory]
    copyOfSessionHistory.forEach( (e) => {
      if (e.id === id) {
        return Object.assign(e, data)
      }
    })
    dispatch(reloadSessionHistory(copyOfSessionHistory))
  }
}
