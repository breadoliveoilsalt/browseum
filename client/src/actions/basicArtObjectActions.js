import fetch from 'isomorphic-fetch'


// I can probably put these under mainRandomButtonClicked
const baseURL = 'https://api.harvardartmuseums.org/object'


// consider breaking down into baseURL and paramsString...I put it as URL for now to keep things simple
// Old url.  Not using for this purpose b/c keep getting the same paintings.
// const paramsString = '?apikey=' + process.env.REACT_APP_API_KEY + '&size=1&sort=random&classification=26|21&q=+description:*%20+labeltext:*'

// Consider trying this one:
// https://api.harvardartmuseums.org/object?apikey=3ff0e030-8144-11e8-b372-95bc18ef563e&classification=26|21&q=+description:*%20+labeltext:*&sort=random&size=1

const url = 'https://api.harvardartmuseums.org/object?apikey=3ff0e030-8144-11e8-b372-95bc18ef563e&classification=26|21&q=+description:*%20+labeltext:*&sort=random&size=1'

function fetchBasicData(dispatch) {
  fetch(url)
    .then(response => response.json())
    .then(response => response.records[0])
    .then(record => {
      if (!record.primaryimageurl) {
        console.log("Retreived invalid record", record)
        fetchBasicData(dispatch)
      }
      else {
        console.log("Retreived valid record", record)
        dispatch(loadCurrentArtObject(record))
      }
    })
}



export function mainRandomButtonClicked() {

  return function(dispatch){
      // Had to specify a function here so that fetchBasicData could call itself
      // again in the event the first record pulled did not have a image url
    return fetchBasicData(dispatch)
    }
  }

//Prior working function. Problem: this doesn't seem to find another record when initial record is invalid
  // export function mainRandomButtonClicked() {
  //
  //   return function(dispatch){
  //     return fetch(baseURL + paramsString)
            // TN: WHEN YOU SEE "RETURN" IN THE LINE ABOVE, IT IS 'RETURNING'
            // THE CULMINATION OF THIS LONG STRING THAT BEGINS WITH FETCH AND ENDS WITH THE LAST
            // 'THEN'
            // YOU DON'T HAVE TO START THIS PART WITH 'RETURN'
  //       .then(response => response.json())
  //       .then(response => response.records[0])
  //       .then(record => {
  //         if (!record.primaryimageurl) {
  //           console.log("Retreived invalid record")
  //           mainRandomButtonClicked()
  //         }
  //         else {
  //           console.log("Retreived valid record")
  //           dispatch(loadCurrentArtObject(record))
  //         }
  //       })
  //     }
  //   }


function loadCurrentArtObject(record) {
  return ({
    type: 'LOAD_ART_OBJECT',
    payload: record
  })
}
