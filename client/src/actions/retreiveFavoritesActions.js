//// copied ////

import fetch from 'isomorphic-fetch'

export function getFavorites() {
  return function(dispatch) {
    return fetch('/api/artobjects/favorites')
    .then(response => response.json())
    .then(response => dispatch(reloadFavorites(response)))
  }
}

export function reloadFavorites(data) {
  return ({
    type: "RELOAD_FAVORITES",
    payload: data
  })
}
