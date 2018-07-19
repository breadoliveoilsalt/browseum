import fetch from 'isomorphic-fetch'

export function getArtistButtonClicked(currentArtObject){
  // dispatch request made

  console.log("currentArtObject:", currentArtObject)

  const artistAPIId = currentArtObject.artistAPIId

  console.log("artist id", artistAPIId)

  // This is what I had as of 180719 6pm - remember to change back
  const url = `https://api.harvardartmuseums.org/object?apikey=3ff0e030-8144-11e8-b372-95bc18ef563e&person=${artistAPIId}&hasimage=1&size=100`

  // Don't forget to sort randomly!

  //   // For the sake of testing, setting this to Picaso's id.
  // const url = ` https://api.harvardartmuseums.org/object?apikey=3ff0e030-8144-11e8-b372-95bc18ef563e&person=28064&hasimage=1&size=100`

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

    // put commonly used action creators in a helper file
    // const something = records.filter blah blah
    // if something.length === 0, then throw error;
    // else return the first record;
    // THE KEY HERE IS I'LL HAVE TO PASS THE SESSION HISTORY AND ALSO CHECK THAT THE RECORD PULLED IS NOT INCLUDED IN IT! THEN THROW AN ERROR IF THERE IS NOTHING LEFT! IN THAT CASE I
    //DON'T EVEN NEED TO CHECK THE ID!
    // ALWAYS CHECKING THE SESSION HISTORY WILL BE THE KEY TO ALL OF THESE!!
    // Thing is, I'll have to add the one I look at to history too...

    // And maybe just have a message state...it will be a redirect to this route...and there will be a button to return to last art...
  })
}
