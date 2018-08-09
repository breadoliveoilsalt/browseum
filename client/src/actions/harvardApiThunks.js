import fetch from 'isomorphic-fetch'
// import {loadError, removeError} from './errorActions'
import { postInitialObjectData } from './serverApiThunks'
// import * as helpers from './helperActions'

// import fetch from 'isomorphic-fetch'
// import * as helpers from './helperActions'
import { loadError, removeError, loadCurrentArtObject, addToSessionHistory } from './basicActionCreators'
// import { postInitialObjectData } from './persistenceActions'

const apiKey = process.env.REACT_APP_API_KEY

// results - 209378 -- as of 180729, this has been my standard url
// CHANGE?? IN LIGHT OF OTHER FUNCTION HERE??
// const baseURL = `https://api.harvardartmuseums.org/object?apikey=${apiKey}&hasimage=1&sort=random&size=1`
const baseURL = `https://api.harvardartmuseums.org/object?apikey=${apiKey}`

// Test URL
// const url = `https://api.harvardartmuseums.org/object?apikey=${apiKey}&person=27644&sort=random&size=1`

export function getRandomArt() {
  return function(dispatch){
      // Had to specify a named, separate function on next line so that fetchBasicData could call itself
      // again in the event the first record retreived from Harvard Museum API
      // did not have an image url.
    return fetchBasicData(dispatch)
    }
  }

function fetchBasicData(dispatch) {

    // Calling removeError() to remove any pre-existing error before loading new Art.
    // Note, I could not find a way to make this conditional, even with passing getState
    // down here (which worked in naviationActions. Sometimes, getState would render and
    // would remove error, and other times, an error would pop up in browser
    // (TypeError: getState is not a function).  Made no sense, because
    // this approach was clearly working some of the time.  So just have to removeError all the time, whether
    // there is an error or not:
  dispatch(removeError())

  fetch(baseURL + "&hasimage=1&sort=random&size=1")
    .then(response => response.json())
    .then(response => response.records[0])
    .then(record => {
        // Have to check for primaryimageurl. Despite url search parameters,
        // some records come back with null for primaryimageurl
        // Condence once proven working with ternairy operator
      if (record.primaryimageurl) {
        console.log("Retrieved valid record: ", record)
        return record
      } else {
        throw {errorType: "INVALID_RECORD", data: record}
      }
    })
    .then(record => fillAnyMissingFields(record))
    .then(record => condenseRecord(record))
    .then(record => dispatch(postInitialObjectData(record)))
    .then(response => {
      dispatch(loadCurrentArtObject(response))
      dispatch(addToSessionHistory(response))})
    .catch(error => {
      if (error.errorType === "INVALID_RECORD") {
        console.log("Retreived invalid record:", error.data)
        fetchBasicData(dispatch)
      } else {
        dispatch(loadError("Sorry, something seems to have gone wrong. Please click Get New Art again."))
      }
    })
}


export function navigationButtonClicked(type, errorMessage){
  return function(dispatch, getState) {

    console.log("Navigation Button Clicked for: ", type)

    const { currentArtObject, sessionHistory, error } = getState()

    const { searchKey, searchValue } = getKeyAndValue(type, currentArtObject)

    if (error.errorOccurred){
      dispatch(removeError())
    }

    return fetch(baseURL + `&${searchKey}=${searchValue}&sort=random&hasimage=1&size=50`)
      .then(response => response.json())
        // I can probably also just reduce this to one line rather than have separate function
      .then(response => filterRecordsWithImages(response.records))
      .then(filteredRecords => findAnOriginalRecord(filteredRecords, sessionHistory))
        // condense this once proved working again to terniary operator
      .then(record => {
        if (!record) {
          throw errorMessage
        } else {
          console.log("Here is the new record: ", record)
          return fillAnyMissingFields(record)
        }})
      .then(record => condenseRecord(record))
      .then(record => dispatch(postInitialObjectData(record)))
      .then(response => {
        dispatch(loadCurrentArtObject(response))
        dispatch(addToSessionHistory(response))})
      .catch(e => {
          if (errorMessage) {
            dispatch(loadError(errorMessage))
          } else {
            dispatch(loadError("Sorry, there seems to be an error with the request. Please try another button."))
          }
        })
  }
}

//// ADD LABELS LIKE THIS ONCE PROVEN WORKING ////
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




//// ACTIONS FOR FORMATTING RECORD DATA FROM HARVARD API ////

export function fillAnyMissingFields(record) {

  // Have to do all these checks due to inconsistencies in the Harvard API records.  These inconsistencies
  // were discovered in testing. Filling in any missing keys prevents errors from occuring
  // at action controller.

  console.log("Checking with fillAnyMissingFields")

  // Check for title
  if (!record.hasOwnProperty("title")) {
    record.title = "Untitled"
  }

    // Check for artist field or reformat
      // With some records where there is no artist, some artists are listed
      // as "Unidentified Artist" with Harvard id 34147. Others simply have no artist.
      // The code below attempts to even out these Harvard API difference.
  if (record.hasOwnProperty("artist")) {
    record.artist = record.artist
    record.artistApiId = record.artistid
  }
  else if (record.hasOwnProperty("people")) {
    record.artist = record.people[0].displayname
    record.artistApiId = record.people[0].personid
  } else {
    record.artist = "Unidentified Artist"
    record.artistApiId = 34147
  }

    // Check for medium field
  if (!record.hasOwnProperty("medium")) {
    record.medium = null
  }

    // Check for date
  if (!record.hasOwnProperty("dated")) {
    record.date = null
  }

    // Check for century
  if (record.hasOwnProperty("century")) {
      // added to avoid error with Harvard database when century has hyphen
    if (record.century.includes("-")) {
      const newCentury = record.century.split("-")[0] + " century"
      record.century = newCentury
    }
  } else {
    record.century = null
  }

    // Check for culture
  if (!record.hasOwnProperty("culture")) {
    record.culture = null
  }

    // Check for commentary
  if (!record.hasOwnProperty("commentary")) {
    record.commentary = null
  }

    // Check for labeltext
  if (!record.hasOwnProperty("labeltext")) {
    record.labeltext = null
  }

    // Check for description
  if (!record.hasOwnProperty("description")) {
    record.description = null
  }

  console.log("Here is the record after checking for missing fields: ", record)

  return record

}

export function condenseRecord(record) {

  console.log("About to condense record")
    // COME BACK TO - why do I nee object Assign.  Just do = {}
    // This is basically what defines what the currentArtObject looks like in the store/state.
  const newRecord = Object.assign({}, {
    id: null,
    objectApiId: record.objectid,
    primaryImageUrl: record.primaryimageurl,
    title: record.title,
    artist: record.artist,
    artistApiId: record.artistApiId,
    medium: record.medium,
    dated: record.dated,
    century: record.century,
    culture: record.culture,
    commentary: record.commentary,
    labelText: record.labeltext,
    description: record.description,
    firstViewed: new Date(),
    lastViewed: new Date(),
    favorite: false,
  })

  console.log("Here is the condensed record:", newRecord)
  return newRecord
}
