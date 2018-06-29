function testReducer(state = ["DEFAULT STATE"], action) {
  switch (action.type) {
    case 'ADD_WORD':
      return [...state, action.word]
    default:
      return state
  }
}

export default testReducer
