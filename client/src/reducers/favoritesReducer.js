function favoritesReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_FAVORITES':
      return [...action.payload]
    case 'RESET_FAVORITES':
      return []
    default:
      return state
  }
}

export default favoritesReducer
