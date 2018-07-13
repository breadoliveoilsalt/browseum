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
    case 'LOAD_ART_OBJECT':
      return console.log(action.payload)

      // Object.assign({}, state, {
      //   primaryimageurl: action.payload.primaryimageurl,
      //   objectAPIId: null,
      //   title: null,
      //   author: null,
      //   authorAPIId: null,
      //   medium: null,
      //   dated: null,
      //   period: null,
      //   periodAPIId: null,
      //   culture: null,
      //   labeltext: null,
      //   description: null,
      //   classificationId: null,
      //   dateViewed: null,
      //   favorite: false,
      //   requestMade: false,
      //   validDataRetreived: null,
      //   errorWithDataRetrieval: {
      //     error: null,
      //     errorMessage: null
      //   }
      // })

    default:
      return state
  }
}

export default currentArtObjectReducer
