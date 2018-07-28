import fetch from 'isomorphic-fetch'
import * as helpers from './helperActions'
import { loadError, removeError } from './errorActions'

export function navigationButtonClicked(type, errorMessage){

  return function(dispatch, getState) {

    console.log("Navigation Button Clicked!")

    const { currentArtObject, sessionHistory } = getState()

    const testResult = getKeyAndValue(type, currentArtObject)
    console.log("Test Result:", testResult)

    let searchKey, searchValue

    // const { searchKey, searchValue } = getKeyAndValue(type, currentArtObject)

    // console.log(searchKey, searchValue)

    // an error message could be an argument or prop

    // const artistApiId = state.currentArtObject.artistApiId
    // artist => person= // currentArtObject.artistApiId
    // century => century= // currentArtObject.century
    // culture => culture= // currentArtObject.culture

    // for culture, do I split and grab first?

    const url = `https://api.harvardartmuseums.org/object?apikey=3ff0e030-8144-11e8-b372-95bc18ef563e&${searchKey}=${searchValue}&hasimage=1&size=50`

    dispatch(removeError())

    return fetch(url)
      .then(response => response.json())
        // Note: I took out passing the currentObjectId as a second argument below
        // I can probably also just reduce this to one line rather than have separate function
      .then(response => filterRecordsWithImages(response.records))
      .then(filteredRecords => findAnOriginalRecord(filteredRecords, sessionHistory))
      .then(record => {
        if (!record) {
          throw errorMessage
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
          console.log(error.message)
          dispatch(loadError(error.message))
        })
  }
}


function findAnOriginalRecord(filteredRecords, sessionHistory) {

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

function filterRecordsWithImages(records) {
  const filteredRecords = records.filter(record => record.primaryimageurl)
  console.log("Here are the filtered records:", filteredRecords)
  return filteredRecords
}

function getKeyAndValue(type, currentArtObject) {
  switch (type) {
    case "artist":
      return ({
        searchKey: "artist",
        searchValue: currentArtObject.artist
      })
    case "date":
      return ({
        searchKey: "century",
        searchValue: currentArtObject.century
      })
    case "culture":
      return ({
        searchKey: "culture",
        searchValue: currentArtObject.culture
      })

  }
}
