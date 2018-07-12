function currentArtObjectReducer(
  state =
    {
      primaryimageurl: null,
      objectAPIId: null,
      title: null,
      author: null,
      authorAPIId: null,
      medium: null,
      dated: null,
      period: null,
      periodAPIId: null,
      culture: null,
      labeltext: null,
      description: null,
      classificationId: null,
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
    case 'ADD_WORD':
      return [...state, action.word]
    default:
      return state
  }
}

export default testReducer
