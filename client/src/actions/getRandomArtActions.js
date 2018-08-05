import fetch from 'isomorphic-fetch'
import {loadError, removeError} from './errorActions'
import { postInitialObjectData } from './persistenceActions'
import * as helpers from './helperActions'

const apiKey = process.env.REACT_APP_API_KEY

// results - 209378 -- as of 180729, this has been my standard url
const url = `https://api.harvardartmuseums.org/object?apikey=${apiKey}&hasimage=1&sort=random&size=1`

export function getRandomArt() {
  return function(dispatch){
      // Had to specify a function below so that fetchBasicData could call itself
      // again in the event the first record retreived from Harvard Museum API
      // did not have an image url.
    return fetchBasicData(dispatch)
    }
  }

function fetchBasicData(dispatch) {

  // Consider making this conditional
  dispatch(removeError())

  fetch(url)
    .then(response => response.json())
    .then(response => response.records[0])
    .then(record => {
        // Have to check for primaryimageurl. Despite url search parameters,
        // some records come back with null for primaryimageurl
      if (record.primaryimageurl) {
        console.log("Retrieved valid record: ", record)
        return record
      } else {
        throw {errorType: "INVALID_RECORD", data: record}
      }
    })
    .then(record => helpers.fillAnyMissingFields(record))
    .then(record => helpers.condenseRecord(record))
    .then(record => dispatch(postInitialObjectData(record)))
    .then(response => {
      dispatch(helpers.loadCurrentArtObject(response))
      dispatch(helpers.addToSessionHistory(response))})
    .catch(error => {
      if (error.errorType === "INVALID_RECORD") {
        console.log("Retreived invalid record:", error.data)
        fetchBasicData(dispatch)
      } else {
        dispatch(loadError("Sorry, something seems to have gone wrong. This art object will not be saved. Please click Get New Art again."))
      }
    })
}
