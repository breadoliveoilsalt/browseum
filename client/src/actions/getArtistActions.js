import fetch from 'isomorphic-fetch'

export function getArtistButtonClicked() {

  // dispatch request made
  const artistId = "19149"

  return function(dispatch) {
     return fetch(`https://api.harvardartmuseums.org/object?apikey=3ff0e030-8144-11e8-b372-95bc18ef563e&person=19149&hasimage=1&size=100`)
     .then(response => response.json())
     .then(response => console.log("Artist records:", response.record))
  }
}
  // const url = `https://api.harvardartmuseums.org/object?apikey=3ff0e030-8144-11e8-b372-95bc18ef563e&person=${artistAPIId}&hasimage=1&size=100`
  //
  // return function(dispatch) {
  //
  //   .then(response => response.json())
  //   .then(response => console.log("Artist records:", response.records))
  // }
// }
