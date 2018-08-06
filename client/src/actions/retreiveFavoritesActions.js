import fetch from 'isomorphic-fetch'

export function getFavorites() {
  return function(dispatch) {
    return fetch('/api/artobjects/favorites')
    .then(response => response.json())
    .then(response => dispatch(resetFavorites(response)))
  }
}

export function resetFavorites(data) {
  return ({
    action: "RESET_FAVORITES",
    payload: data
  })
}
