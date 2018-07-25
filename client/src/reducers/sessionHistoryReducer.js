function sessionHistoryReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_SESSION_HISTORY':
    // debugger
      return [...state, action.payload]
    default:
      return state
  }
}

export default sessionHistoryReducer
