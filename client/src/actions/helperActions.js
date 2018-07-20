

export function fillAnyMissingFields(record) {

  // Have to do all these checks due to inconsistencies in API records.  These inconsistencies
  // were discovered in testing. Filling in any missing keys prevents errors from occuring
  // at action controller.

  console.log("Checking with fillAnyMissingFields")

  // check for title
  if (!record.hasOwnProperty("title")) {
    record.title = null
  }

    // check for artist field or reformat
    // With some records where there is no artist, some artists are listed
    // as "Unidentified Artist" with Harvard id 34147. Others simply have no artist.
    // The code below attempts to even out these Harvard API difference.
  if (record.hasOwnProperty("artist")) {
    record.artist = record.artist
    record.artistAPIId = record.artistid
  }
  else if (record.hasOwnProperty("people")) {
    record.artist = record.people[0].displayname
    record.artistAPIId = record.people[0].personid
  } else {
    record.artist = "Unidentified Artist"
    record.artistAPIId = 34147
  }

    // check for medium field
  if (!record.hasOwnProperty("medium")) {
    record.medium = null
  }

    // check for date
  if (!record.hasOwnProperty("dated")) {
    record.date = null
  }

    // check for century
  if (!record.hasOwnProperty("century")) {
    record.century = null
  }

    // check for culture
  if (!record.hasOwnProperty("culture")) {
    record.culture = null
  }

    // check for commentary
  if (!record.hasOwnProperty("commentary")) {
    record.commentary = null
  }

    // check for labeltext
  if (!record.hasOwnProperty("labeltext")) {
    record.labeltext = null
  }

    // check for description
  if (!record.hasOwnProperty("description")) {
    record.description = null
  }

  return record

}

export function loadCurrentArtObject(record) {
  return ({
    type: 'LOAD_ART_OBJECT',
    payload: record
  })
}

export function addToSessionHistory(record){
  return ({
    type: 'ADD_TO_SESSION_HISTORY',
    payload: record
  })
}
