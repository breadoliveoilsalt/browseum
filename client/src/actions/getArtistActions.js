import fetch from 'isomorphic-fetch'

    // Don't forget to sort randomly!

    //   // For the sake of testing, setting this to Picaso's id.
    // const url = ` https://api.harvardartmuseums.org/object?apikey=3ff0e030-8144-11e8-b372-95bc18ef563e&person=28064&hasimage=1&size=100`

export function getArtistButtonClicked(currentArtObject){

  return function(dispatch, getState) {

    const state = getState()
    const artistApiId = state.currentArtObject.artistApiId
    const objectApiId = state.currentArtObject.objectApiId


    // This is what I had as of 180719 6pm - remember to change back
    const url = `https://api.harvardartmuseums.org/object?apikey=3ff0e030-8144-11e8-b372-95bc18ef563e&person=${artistApiId}&hasimage=1&size=100`

    return fetch(url)
      .then(response => response.json())
      .then(response => filterRecordsWithImages(response.records, objectApiId))
      .then(filteredRecords => findAnOriginalRecord(filteredRecords, state))
      .then(foundRecord => console.log("here is the found record: ", foundRecord))
      // if return value is undefined, then I have to throw error
      // .then(sH => console.log("Here is the session history:", sH ))
      // have those functions return an error and then jump to catch, which then sets off a dispatch
      // to the state
  }
}


function findAnOriginalRecord(filteredRecords, state) {

  const { sessionHistory } = state
  let newRecord

    // Have to test ids b/c the sessionHistory contains condenced records,
    // not full records like filteredRecords
  for (var i = 0; i < filteredRecords.length; i++) {

    if (newRecord) {
      break
    }

    const testRecord = filteredRecords[i]
    console.log("Here's the record for first loop:", testRecord)

    // Take a testRecord from filteredRecords and compare it to each
    // record in sessionHistory.  If testRecord is not in sessionHistory,
    // then it becomes the newRecord to create the next currentArtObject.

    for (var i = 0; i < sessionHistory.length; i++) {
      if (testRecord.objectid !== sessionHistory[i]) {
        newRecord = testRecord
        console.log("This is the winning test record: ", testRecord)
        break
      }
    }
  }
  return newRecord
}

function filterRecordsWithImages(records, currentObjectId) {
  const filteredRecords = records.filter(record => {
    return (record.primaryimageurl) && (record.objectid !== currentObjectId)
  })
  console.log("Here are the filtered records:", filteredRecords)
  return filteredRecords
}
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
