function currentArtObjectReducer(
  state =
    {
      primaryimageurl: null,
      objectAPIId: null,
      title: null,
      artist: null,
      artistAPIId: null,
      medium: null,
      dated: null,
      century: null,
      culture: null,
      labeltext: null,
      description: null,
      commentary: null,
      dateViewed: null,
      favorite: false,
      requestMade: false,
      validDataRetreived: null,
      errorWithDataRetrieval: {
        error: null,
        errorMessage: null
      }
    },

  action) {


  switch (action.type) {

    case 'REQUEST_ART_OBJECT':
      return Object.assign({}, state, {requestMade: true})

    case 'LOAD_ART_OBJECT':
      return Object.assign({}, state, {
        primaryimageurl: action.payload.primaryimageurl,
        objectAPIId: action.payload.objectid,
        title: action.payload.title,
        artist: action.payload.artist,
        artistAPIId: action.payload.artistAPIId,
        medium: action.payload.medium,
        dated: action.payload.dated,
        century: action.payload.century,
        culture: action.payload.culture,
        commentary: action.payload.commentary,
        labeltext: action.payload.labeltext,
        description: action.payload.description,
        dateViewed: new Date,
        favorite: false,
        requestMade: false,
        validDataRetreived: true,
        errorWithDataRetrieval: {
          error: null,
          errorMessage: null
        }
      })

    default:
      return state
  }
}

export default currentArtObjectReducer
