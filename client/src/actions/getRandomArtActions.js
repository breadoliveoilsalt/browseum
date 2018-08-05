import fetch from 'isomorphic-fetch'
import {loadError, removeError} from './errorActions'
import { postInitialObjectData } from './persistenceActions'
import * as helpers from './helperActions'


// Consider trying this one: https://api.harvardartmuseums.org/object?apikey=${apiKey}&classification=26|21&q=+description:*%20+labeltext:*&sort=random&size=1

// const url = 'https://api.harvardartmuseums.org/object?apikey=${apiKey}&classification=21|26&sort=random&size=1/'
//
const apiKey = process.env.REACT_APP_API_KEY

// // Later: this actually seems to be working out well.
// const url = `https://api.harvardartmuseums.org/object?apikey=${apiKey}&size=1&sort=random&q=labeltext:*`

// This person only has 8 records, 5 with images. A good tester
// const url = `https://api.harvardartmuseums.org/object?apikey=${apiKey}&person=27644&sort=random&size=1`

// This person has 24 records, only 6 or 7 with images
// const url = `https://api.harvardartmuseums.org/object?apikey=${apiKey}&person=29090&hasimage=1&sort=random&size=1`

// This does not work -- it gets repeats
// const url = `https://api.harvardartmuseums.org/object?apikey=${apiKey}&classification=26|21&q=+description:*%20+labeltext:*&sort=random&size=1`

// This does not work either -- gets repeats
// const url = `https://api.harvardartmuseums.org/object?apikey=${apiKey}&q=+description:*%20+labeltext:*&sort=random&size=1`

// This seems not to work either -- gets repeats, despite results of 23021
// const url = `https://api.harvardartmuseums.org/object?apikey=${apiKey}&hasimage=1&q=+description:*%20+labeltext:*&sort=random&size=1`

// results - 209378 -- as of 180729, this has been my standard url
const url = `https://api.harvardartmuseums.org/object?apikey=${apiKey}&hasimage=1&sort=random&size=1`

export function getRandomArt() {

  return function(dispatch){
      // Had to specify a function here so that fetchBasicData could call itself
      // again in the event the first record pulled did not have a image url
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
