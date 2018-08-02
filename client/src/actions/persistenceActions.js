import fetch from 'isomorphic-fetch'

  // This needs to be a thunk
export function postInitialObjectData(data) {
    // NOTE that if I wrap a function in dispatch in mapPropsToDispatch...
        // postInitialObjectData: (data) => dispatch(postInitialObjectData(data))
    // ...then thunkage still works and I still get access to getState
  return function(dispatch, getState) {

    const { currentArtObject } = getState()
    console.log("CAO about to be POSTed:", currentArtObject)
    return fetch("/api/artobjects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentArtObject)
      })
    .then(res => res.json())
    .then(data2 => console.log("Here is the server response:", data2))

    }
  }
