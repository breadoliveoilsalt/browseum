function sessionHistoryReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_SESSION_HISTORY':
      return [...state, action.payload]
    case 'RELOAD_SESSION_HISTORY':
      return action.payload
    default:
      return state
  }
}

export default sessionHistoryReducer
