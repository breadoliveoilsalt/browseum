function favoritesReducer(state = [], action) {
  switch (action.type) {
    case 'RELOAD_FAVORITES':
      return [...action.payload]
    default:
      return state
  }
}

export default favoritesReducer
