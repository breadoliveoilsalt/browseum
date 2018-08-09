//// copied ////

import fetch from 'isomorphic-fetch'
import * as helpers from './helperActions'
import { loadError, removeError } from './errorActions'
import { postInitialObjectData } from './persistenceActions'

export function navigationButtonClicked(type, errorMessage){

  return function(dispatch, getState) {

    console.log("Navigation Button Clicked for: ", type)

    const { currentArtObject, sessionHistory, error } = getState()

    const { searchKey, searchValue } = getKeyAndValue(type, currentArtObject)

    const apiKey = process.env.REACT_APP_API_KEY

    const url = `https://api.harvardartmuseums.org/object?apikey=${apiKey}&${searchKey}=${searchValue}&sort=random&hasimage=1&size=50`

    if (error.errorOccurred){
      dispatch(removeError())
    }

    return fetch(url)
      .then(response => response.json())
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
      .then(record => dispatch(postInitialObjectData(record)))
      .then(response => {
        dispatch(helpers.loadCurrentArtObject(response))
        dispatch(helpers.addToSessionHistory(response))})
      .catch(e => {
          if (errorMessage) {
            dispatch(loadError(errorMessage))
          } else {
            dispatch(loadError("Sorry, there seems to be an error with the request. Please try another button."))
          }
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
    // this function returns newRecord as undefined, and an error is thrown in getRandomArt()
  for (let i = 0; i < filteredRecords.length; i++) {
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
        searchKey: "person",
        searchValue: currentArtObject.artistApiId
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
    default:
      return null
  }
}
