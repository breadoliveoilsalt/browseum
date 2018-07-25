import fetch from 'isomorphic-fetch'
import * as helpers from './helperActions'

    // Don't forget to sort randomly!

    //   // For the sake of testing, setting this to Picaso's id.
    // const url = ` https://api.harvardartmuseums.org/object?apikey=3ff0e030-8144-11e8-b372-95bc18ef563e&person=28064&hasimage=1&size=100`

export function getArtistButtonClicked(currentArtObject){

  return function(dispatch, getState) {

    const state = getState()
    const artistApiId = state.currentArtObject.artistApiId
    const objectApiId = state.currentArtObject.objectApiId


    // This is what I had as of 180719 6pm - remember to change back
    const url = `https://api.harvardartmuseums.org/object?apikey=3ff0e030-8144-11e8-b372-95bc18ef563e&person=${artistApiId}&hasimage=1&size=100`

// records below should be object, as in art object
// UP TO HERE -- HAVE TO TEST IF THIS WORKS
    return fetch(url)
      .then(response => response.json())
      .then(response => filterRecordsWithImages(response.records, objectApiId))
      .then(filteredRecords => findAnOriginalRecord(filteredRecords, state))
      // .then(foundRecord => console.log("here is the found record: ", foundRecord))
      .then(record => {
        if (!record) {
          throw {errorType: "NO_ARTIST_RECORDS"}
        } else {
          console.log("Here is the new record: ", record)
          return helpers.fillAnyMissingFields(record)
        }})
      .then(record => helpers.condenseRecord(record))
      .then(record => {
          dispatch(helpers.loadCurrentArtObject(record))
          dispatch(helpers.addToSessionHistory(record))
        })
      .catch(error => {
        if (error.errorType === "NO_ARTIST_RECORDS") {
          console.log("No valid artist records to retreive")
        }})
        // Catch should at some point also dispatch something to the state
  }
}


function findAnOriginalRecord(filteredRecords, state) {

  const { sessionHistory } = state
  let arrayOfHistoryIds = []
  let newRecord

  // Make an array of the object ids in the sessionHistory
  for (var i = 0; i < sessionHistory.length; i++) {
    arrayOfHistoryIds.push(sessionHistory[i].objectApiId)
  }

  // Go through the filteredRecords. Return the first that is not in sessionHistory,
  // i.e., it hasn't been viewed yet, by comparing ids. If all the filteredRecords are in the sessionHistory,
  // this function returns newRecord as undefined, and an error is thrown in getArtistButtonClicked
  for (var i = 0; i < filteredRecords.length; i++) {
    if (arrayOfHistoryIds.includes(filteredRecords[i].objectid)) {
      continue
    } else {
      newRecord = filteredRecords[i]
      break
    }
  }

  return newRecord
}

function filterRecordsWithImages(records, currentObjectId) {
  const filteredRecords = records.filter(record => {
    return (record.primaryimageurl) && (record.objectid !== currentObjectId)
  })
  console.log("Here are the filtered records:", filteredRecords)
  return filteredRecords
}
