import fetch from 'isomorphic-fetch'

function dataIsRequested(bool) {
  return {
    type: 'REQUEST_MADE',
    bool: bool
  }
}

function dataIsLoaded(bool) {
  return {
    type: 'DATA_LOADED',
    bool: bool
  }
}

function addDataToState(data) {
  return {
    type: 'ADD_DATA_TO_STATE',
    payload: data
  }
}

export function getData(url) {
  console.log("u made it to action creator getData")

  return function(dispatch) {
    // console.log("u are w/in the thunk")
    // debugger

    dispatch(dataIsRequested(true))
    return fetch(url)
      .then(res => res.json())
      .then(data => dispatch(addDataToState(data)))
      .then(dispatch(dataIsLoaded(true)))
    }
  }
      // .then(data => {
      //   debugger
      //   console.log("Here is the data:", data)
      // })

    // works up to here
    // return fetch(url)
    // .then(res => res.json)
    // .then(data => dispatch(addDataToState(data)))
    // .then(dispatch(dataIsLoaded(true)))
//   }
// }
