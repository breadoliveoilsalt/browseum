function currentArtObjectReducer(state = { }, action) {

  switch (action.type) {

    case 'LOAD_ART_OBJECT':
      return Object.assign({}, action.payload)
    case 'CHANGE_COA_FAVORITE_STATUS':
      return Object.assign({}, state, {favorite: action.payload})
    default:
      return state
  }
}

export default currentArtObjectReducer
