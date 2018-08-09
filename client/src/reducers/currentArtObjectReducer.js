function currentArtObjectReducer(state = { }, action) {

  switch (action.type) {

    case 'LOAD_ART_OBJECT':
      return Object.assign({}, action.payload)

    default:
      return state
  }
}

export default currentArtObjectReducer
