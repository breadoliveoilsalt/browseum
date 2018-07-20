import fetch from 'isomorphic-fetch'
import * as helpers from './helperActions'


// I can probably put these under mainRandomButtonClicked
const baseURL = 'https://api.harvardartmuseums.org/object'


// consider breaking down into baseURL and paramsString...I put it as URL for now to keep things simple
// Old url.  Not using for this purpose b/c keep getting the same paintings.
// const paramsString = '?apikey=' + process.env.REACT_APP_API_KEY + '&size=1&sort=random&classification=26|21&q=+description:*%20+labeltext:*'

// Consider trying this one:
// https://api.harvardartmuseums.org/object?apikey=3ff0e030-8144-11e8-b372-95bc18ef563e&classification=26|21&q=+description:*%20+labeltext:*&sort=random&size=1

// const url = 'https://api.harvardartmuseums.org/object?apikey=3ff0e030-8144-11e8-b372-95bc18ef563e&classification=21|26&sort=random&size=1/'

// Later: this actually seems to be working out well.
const url = 'https://api.harvardartmuseums.org/object?apikey=3ff0e030-8144-11e8-b372-95bc18ef563e&size=1&sort=random&q=labeltext:*'

export function mainRandomButtonClicked() {

  return function(dispatch){
      // Had to specify a function here so that fetchBasicData could call itself
      // again in the event the first record pulled did not have a image url
    return fetchBasicData(dispatch)
    }
  }


function fetchBasicData(dispatch) {
  fetch(url)
    .then(response => response.json())
    .then(response => response.records[0])
    .then(function(record) {
        // Most important data to check for is whether there is an image URL,
        // so we do that here, and re-fetch data if this is missing. We fill
        // in any missing data later with fillAnyMissingFields().
      if (!record.primaryimageurl) {
        console.log("Retreived invalid record", record)
        fetchBasicData(dispatch)
      }
      else {
        console.log("Retreived valid record", record)
        const checkedRecord = helpers.fillAnyMissingFields(record)
        dispatch(helpers.loadCurrentArtObject(checkedRecord))
        dispatch(helpers.addToSessionHistory(checkedRecord))
      }
    })
      // this is the new X factor here -- so it's both listening to the if statement
      // but then jumping below too...
      // before hand, when the dispatch was in the else statement, it was a pure if/else.
    // .then(checkedRecord => dispatch(loadCurrentArtObject(checkedRecord)))
}


// function fillAnyMissingFields(record) {
//
//   // Have to do all these checks due to inconsistencies in API records.  These inconsistencies
//   // were discovered in testing. Filling in any missing keys prevents errors from occuring
//   // at action controller.
//
//   console.log("Checking with fillAnyMissingFields")
//
//   // check for title
//   if (!record.hasOwnProperty("title")) {
//     record.title = null
//   }
//
//     // check for artist field or reformat
//     // With some records where there is no artist, some artists are listed
//     // as "Unidentified Artist" with Harvard id 34147. Others simply have no artist.
//     // The code below attempts to even out these Harvard API difference.
//   if (record.hasOwnProperty("artist")) {
//     record.artist = record.artist
//     record.artistAPIId = record.artistid
//   }
//   else if (record.hasOwnProperty("people")) {
//     record.artist = record.people[0].displayname
//     record.artistAPIId = record.people[0].personid
//   } else {
//     record.artist = "Unidentified Artist"
//     record.artistAPIId = 34147
//   }
//
//     // check for medium field
//   if (!record.hasOwnProperty("medium")) {
//     record.medium = null
//   }
//
//     // check for date
//   if (!record.hasOwnProperty("dated")) {
//     record.date = null
//   }
//
//     // check for century
//   if (!record.hasOwnProperty("century")) {
//     record.century = null
//   }
//
//     // check for culture
//   if (!record.hasOwnProperty("culture")) {
//     record.culture = null
//   }
//
//     // check for commentary
//   if (!record.hasOwnProperty("commentary")) {
//     record.commentary = null
//   }
//
//     // check for labeltext
//   if (!record.hasOwnProperty("labeltext")) {
//     record.labeltext = null
//   }
//
//     // check for description
//   if (!record.hasOwnProperty("description")) {
//     record.description = null
//   }
//
//   return record
//
// }
//
// function loadCurrentArtObject(record) {
//   return ({
//     type: 'LOAD_ART_OBJECT',
//     payload: record
//   })
// }
//
// function addToSessionHistory(record){
//   return ({
//     type: 'ADD_TO_SESSION_HISTORY',
//     payload: record
//   })
// }
