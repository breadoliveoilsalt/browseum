function currentArtObjectReducer(state = { }, action) {

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
