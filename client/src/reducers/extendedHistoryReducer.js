function extendedHistoryReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_EXTENDED_HISTORY':
      return [...action.payload]
    case 'RESET_EXTENDED_HISTORY':
      return []
    default:
      return state
  }
}

export default extendedHistoryReducer
