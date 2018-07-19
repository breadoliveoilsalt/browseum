import fetch from 'isomorphic-fetch'

export function getArtistButtonClicked(currentArtObject){
  // dispatch request made

  console.log("currentArtObject:", currentArtObject)

  const artistAPIId = currentArtObject.artistAPIId

  console.log("artist id", artistAPIId)

  // This is what I had as of 180719 6pm - remember to change back
  // const url = `https://api.harvardartmuseums.org/object?apikey=3ff0e030-8144-11e8-b372-95bc18ef563e&person=${artistAPIId}&hasimage=1&size=100`

  // Don't forget to sort randomly!

    // For the sake of testing, setting this to Picaso's id.
  const url = ` https://api.harvardartmuseums.org/object?apikey=3ff0e030-8144-11e8-b372-95bc18ef563e&person=28064&hasimage=1&size=100`

  return function(dispatch) {
    return fetch(url)
      .then(response => response.json())
      .then(response => filterRecords(response.records, currentArtObject.objectAPIId))
      .then(filteredRecords => console.log("Here are the filtered records: ", filteredRecords))
  }
}

function filterRecords(records, currentObjectId) {
  console.log("You are filtering the records now.")
  console.log("Here are the records: ", records)
  return records.filter( record => {
    return (record.primaryimageurl) && (record.objectid !== currentObjectId)
  })
}
