function testReducer(state = ["DEFAULT STATE"], action) {
  switch (action.type) {
    case 'ADD_WORD':
      return Object.assign([], state, "TEST WORD ADDED")
    default:
      return state
  }
}

export default testReducer
