function favoritesReducer(state = [], action) {
  switch (action.type) {
    case 'RELOAD_FAVORITES':
      return [...action.payload]
    case 'ADD_TO_STATE_FAVORITES':
      return [action.payload, ...state]
    case 'REMOVE_FROM_STATE_FAVORITES':
      return [...state.filter( object => object.id !== action.id )]
    default:
      return state
  }
}

export default favoritesReducer
