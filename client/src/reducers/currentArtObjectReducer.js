function currentArtObjectReducer(state = { }, action) {

  switch (action.type) {

    case 'LOAD_ART_OBJECT':
        // removed , state, from below
      return Object.assign({}, action.payload)

    case 'UPDATE_ID':
      return Object.assign({}, state, {id: action.payload})

    default:
      return state
  }
}

export default currentArtObjectReducer
