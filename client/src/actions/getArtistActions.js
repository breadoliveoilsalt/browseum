import fetch from 'isomorphic-fetch'

export function getArtistButtonClicked(currentArtObject){
  // dispatch request made

  console.log("currentArtObject:", currentArtObject)

  const artistAPIId = currentArtObject.artistAPIId

  console.log("artist id", artistAPIId)

  const url = `https://api.harvardartmuseums.org/object?apikey=3ff0e030-8144-11e8-b372-95bc18ef563e&person=${artistAPIId}&hasimage=1&size=100`

  return function(dispatch) {
    return fetch(url)
      .then(response => response.json())
      .then(response => filterRecords(response.records))
  }
}

function filterRecords(records) {
  console.log("You are filtering the records now.")
}
