function currentArtObjectReducer(
  state =
    {
      primaryimageurl: null,
      objectApiId: null,
      title: null,
      artist: null,
      artistApiId: null,
      medium: null,
      dated: null,
      century: null,
      culture: null,
      labeltext: null,
      description: null,
      commentary: null,
      dateViewed: null,
      favorite: false
    },

  action) {


  switch (action.type) {

    case 'REQUEST_ART_OBJECT':
      return Object.assign({}, state, {requestMade: true})

    case 'LOAD_ART_OBJECT':
      return Object.assign({}, state, action.payload)

    default:
      return state
  }
}

export default currentArtObjectReducer
