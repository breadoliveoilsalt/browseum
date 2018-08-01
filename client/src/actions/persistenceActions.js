import fetch from 'isomorphic-fetch'

  // This needs to be a thunk
export function postInitialObjectData(data) {
  return function(dispatch) {
    return fetch("/api/artobjects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
      })
    .then(res => res.json())
    .then(data => console.log(data))

    }
  }
