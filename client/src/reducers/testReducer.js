function testReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_WORD':
      return Object.assign([], state, "TEST WORD")
    default:
      return state
  }
}

export default testReducer
