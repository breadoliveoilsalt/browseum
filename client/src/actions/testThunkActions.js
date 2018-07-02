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
  return function(dispatch) {

    dispatch(dataIsRequested(true))

    return fetch(url)
    .then(res => res.json)
    .then(data => dispatch(addDatatToState(data)))
    .then(dispatch(datatIsLoaded(true)))
  }
}
