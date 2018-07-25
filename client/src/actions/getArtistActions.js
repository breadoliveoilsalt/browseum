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
      .then(record => dispatch(helpers.loadCurrentArtObject(record)))
      .then(record => dispatch(helpers.addToSessionHistory(record)))
      .catch(error => {
        if (error.errorType === "NO_ARTIST_RECORDS") {
          console.log("No valid artist records to retreive")
        }})
        // Catch should at some point also dispatch something to the state
  }
}


function findAnOriginalRecord(filteredRecords, state) {

  const { sessionHistory } = state
  let newRecord

    // Have to test ids b/c the sessionHistory contains condenced records,
    // not full records like filteredRecords
  for (var i = 0; i < filteredRecords.length; i++) {
    // debugger
    if (newRecord) {
      break
    }

    const testRecord = filteredRecords[i]
    // console.log("Here's the record for first loop:", testRecord)

    // Take a testRecord from filteredRecords and compare it to each
    // record in sessionHistory.  If testRecord is not in sessionHistory,
    // then it becomes the newRecord to create the next currentArtObject.

    for (var i = 0; i < sessionHistory.length; i++) {
      // debugger
      if (testRecord.objectid !== sessionHistory[i]) {
        newRecord = testRecord
        console.log("This is the winning test record: ", testRecord)
        break
      }
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
