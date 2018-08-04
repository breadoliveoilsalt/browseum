function extendedHistoryReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_EXTENDED_HISTORY':
      return [...state, action.payload]
    case 'RESET_EXTENDED_HISTORY':
      return []
    default:
      return state
  }
}

export default sessionHistoryReducer
