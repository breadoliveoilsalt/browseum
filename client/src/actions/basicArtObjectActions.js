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
      if (record.primaryimageurl) {
        console.log("Retrieved valid record: ", record)
        return record
      } else {
        throw {errorType: "INVALID_RECORD", data: record}
      }
    })
    .then(record => console.log("Is this valid? ", record))
    .catch(error => {
      if (error.errorType === "INVALID_RECORD") {
        console.log("Retreived invalid record:", error.data)
        fetchBasicData(dispatch)
      }
    })
}

// // NO -- I need dispatch to be there
// function testRecord(record) {
//   if (record.primaryimageurl)
// }
//
//
//
//     find(record => record.primaryimageurl))
//     // .then(function(resolve, reject) {
//     //     if (record.primaryimageurl) {
//     //       resolve(record)
//     //     } else {
//     //       reject(fetchBasicData(dispatch))
//     //     }
//     //   })
//     // .then(record => {
//     //   if (record.primaryimageurl) {
//     //     console.log("Retreived valid record", record)
//     //     return helpers.fillAnyMissingFields(record)
//     //   }
//     //   else {
//     //     console.log("Retreived invalid record", record)
//     //     return fetchBasicData(dispatch)
//     //   }})
//         // Most important data to check for is whether there is an image URL,
//         // so we do that here, and re-fetch data if this is missing.
//         // The Harvard API has a "hasimage" parameter, but this can still return
//         // a primaryimageurl with a value of null.
//         // We fill in any missing data later with fillAnyMissingFields().
//         // I can condense this all this into a tertiary once working.
//     .then(record => {
//       console.log("Here's the record with a primaryimageurl", record)
//       return helpers.condenseRecord(record) })
//     .then(record => dispatch(helpers.loadCurrentArtObject(record)))
//     .then(record => dispatch(helpers.addToSessionHistory(record)))
// }
