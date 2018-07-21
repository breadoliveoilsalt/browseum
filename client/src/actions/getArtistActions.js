import fetch from 'isomorphic-fetch'

export function getArtistButtonClicked(currentArtObject){
  // dispatch request made

  // CHANGE THIS SO THAT getState() is called to get currentArt Object -- then pull ID from there!

  console.log("currentArtObject:", currentArtObject)

  const artistAPIId = currentArtObject.artistAPIId

  console.log("artist id", artistAPIId)

  // This is what I had as of 180719 6pm - remember to change back
  const url = `https://api.harvardartmuseums.org/object?apikey=3ff0e030-8144-11e8-b372-95bc18ef563e&person=${artistAPIId}&hasimage=1&size=100`

  // Don't forget to sort randomly!

  //   // For the sake of testing, setting this to Picaso's id.
  // const url = ` https://api.harvardartmuseums.org/object?apikey=3ff0e030-8144-11e8-b372-95bc18ef563e&person=28064&hasimage=1&size=100`

  return function(dispatch, getState) {
    return fetch(url)
      .then(response => response.json())
      .then(response => filterRecordsWithImages(response.records, currentArtObject.objectAPIId))
      // .then(filteredRecords => console.log("Here are the filtered records: ", filteredRecords))
      // .then(console.log("here is the State:", getState()))
      // Put this back in -- .then(filteredRecords => findAnOriginalRecord(filteredRecords, getState))
      // have those functions return an error and then jump to catch, which then sets off a dispatch
      // to the state
  }
}
//  Put this back in -- IN THE MIDDLE HERE
// function findAnOriginalRecord(records, getState) {
//   const sessionHistory = getState(). // IN MIDDLE HERE
// }

function filterRecordsWithImages(records, currentObjectId) {
  console.log("You are filtering the records now.")
  console.log("Here are the records: ", records)
  return records.filter( record => {
    return (record.primaryimageurl) && (record.objectid !== currentObjectId)

    // Throw an error here if arrayLength = 0

    // put commonly used action creators in a helper file
    // const something = records.filter blah blah
    // if something.length === 0, then throw error;
    // else return the first record;
    // THE KEY HERE IS I'LL HAVE TO PASS THE SESSION HISTORY AND ALSO CHECK THAT THE RECORD PULLED IS NOT INCLUDED IN IT! THEN THROW AN ERROR IF THERE IS NOTHING LEFT! IN THAT CASE I
    //DON'T EVEN NEED TO CHECK THE ID!
    // ALWAYS CHECKING THE SESSION HISTORY WILL BE THE KEY TO ALL OF THESE!!
    // Thing is, I'll have to add the one I look at to history too...

    // And maybe just have a message state...it will be a redirect to this route...and there will be a button to return to last art...

    // -  make separate files for universal helpers in the action creator world
    // // - Steps:
    //     - Make API request for artist, get a 100 records
    //     - Get an array of records where they have a primary image url and they are not in session history
    //       - To do the latter, use .find on the array
  })
}
