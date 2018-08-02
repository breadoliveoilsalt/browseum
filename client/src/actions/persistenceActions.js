import fetch from 'isomorphic-fetch'

  // This sends the COA to the Rails API DB and returns an id from the database, which is then assigned to the COA
export function postInitialObjectData() {
    // Notice: that if I wrap a function in dispatch in mapPropsToDispatch...
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
    .then(res => {
      if (res.errors) {
        console.log("There were some errors with the server:", res.errors)
      } else {
        console.log("Assigning id to the CAO:", res.id)
        dispatch(updateId(res.id))
    }})
  }
}


function updateId(id) {
  return ({
    type: 'UPDATE_ID',
    payload: id
  })
}
