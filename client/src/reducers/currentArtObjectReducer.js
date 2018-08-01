function currentArtObjectReducer(
  state =
    {
      // id: null,
      // objectApiId: null,
      // primaryimageurl: null,
      // title: null,
      // artist: null,
      // artistApiId: null,
      // medium: null,
      // dated: null,
      // century: null,
      // culture: null,
      // labeltext: null,
      // description: null,
      // commentary: null,
      // firstViewed: null,
      // lastViewed: null,
      // favorite: false
    },

  action) {


  switch (action.type) {

    case 'LOAD_ART_OBJECT':
        // removed , state, from below
      return Object.assign({}, action.payload)

    // case 'UPDATE_LAST_VIEWED':
    //   return Object.assign({}, state, {lastViewed: new Date})

    default:
      return state
  }
}

export default currentArtObjectReducer
