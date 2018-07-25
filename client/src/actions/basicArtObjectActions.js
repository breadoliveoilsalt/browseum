import fetch from 'isomorphic-fetch'
import * as helpers from './helperActions'


// I can probably put these under mainRandomButtonClicked
// const baseURL = 'https://api.harvardartmuseums.org/object'


// consider breaking down into baseURL and paramsString...I put it as URL for now to keep things simple
// Old url.  Not using for this purpose b/c keep getting the same paintings.
// const paramsString = '?apikey=' + process.env.REACT_APP_API_KEY + '&size=1&sort=random&classification=26|21&q=+description:*%20+labeltext:*'

// Consider trying this one:
// https://api.harvardartmuseums.org/object?apikey=3ff0e030-8144-11e8-b372-95bc18ef563e&classification=26|21&q=+description:*%20+labeltext:*&sort=random&size=1

// const url = 'https://api.harvardartmuseums.org/object?apikey=3ff0e030-8144-11e8-b372-95bc18ef563e&classification=21|26&sort=random&size=1/'

// Later: this actually seems to be working out well.
// const url = 'https://api.harvardartmuseums.org/object?apikey=3ff0e030-8144-11e8-b372-95bc18ef563e&size=1&sort=random&q=labeltext:*'

// This person only has 8 records, 5 with images.
const url = `https://api.harvardartmuseums.org/object?apikey=3ff0e030-8144-11e8-b372-95bc18ef563e&person=27644&sort=random&size=1`

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
    .then(record => {
      dispatch(helpers.loadCurrentArtObject(record))
      dispatch(helpers.addToSessionHistory(record))
      })
    .catch(error => {
      if (error.errorType === "INVALID_RECORD") {
        console.log("Retreived invalid record:", error.data)
        fetchBasicData(dispatch)
      }
    })
}
