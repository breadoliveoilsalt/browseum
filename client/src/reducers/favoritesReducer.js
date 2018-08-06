function favoritesReducer(state = [], action) {
  switch (action.type) {
    case 'RESET_FAVORITES':
      return [...action.payload]
    default:
      return state
  }
}

export default favoritesReducer
