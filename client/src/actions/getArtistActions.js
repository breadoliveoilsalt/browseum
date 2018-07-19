import fetch from 'isomorphic-fetch'

export function getArtistButtonClicked(currentArtObject){
  // dispatch request made

  console.log("currentArtObject:", currentArtObject)

  const artistAPIId = currentArtObject.artistAPIId

  console.log("artist id", artistAPIId)

  return function(dispatch) {
    return fetch(`https://api.harvardartmuseums.org/object?apikey=3ff0e030-8144-11e8-b372-95bc18ef563e&person=${artistAPIId}&hasimage=1&size=100`)
    .then(response => response.json())
    .then(response => console.log("Artist records:", response.records))
  }
}
