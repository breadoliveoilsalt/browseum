function favoritesReducer(state = [], action) {
  switch (action.type) {
    case 'RELOAD_FAVORITES':
      return [...action.payload]
    case 'ADD_TO_STATE_FAVORITES':
      return [action.payload, ...state]
    default:
      return state
  }
}

export default favoritesReducer
