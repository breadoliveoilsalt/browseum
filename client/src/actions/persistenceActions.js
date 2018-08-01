import fetch from 'isomorphic-fetch'

  // This needs to be a thunk
export function postInitialObjectData(data) {
  return function(dispatch) {
    return fetch('/artobjects')
    .then(res => res.json())
    .then(data => console.log(data))
    // , {
    //   method: 'POST',
    //   body: JSON.stringify(data)
    }
  }
