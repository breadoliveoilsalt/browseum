import fetch from 'isomorphic-fetch'

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
    console.log("Update about to be POSTed:", data)
    return fetch(`/api/artobjects/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
        })
    .then(res => console.log(res))

  }
}

function updateId(id) {
  return ({
    type: 'UPDATE_ID',
    payload: id
  })
}
