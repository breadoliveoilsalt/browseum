function testThunkReducer(
  state = {requestMade: false, isLoaded: false, data: [ ]},
  action)
  {
      switch (action.type) {
        case 'REQUEST_MADE':
          return Object.assign({}, state, {requestMade: action.bool})
        case 'DATA_LOADED':
          return Object.assign({}, state, {isLoaded: action.bool})
        case 'ADD_DATA_TO_STATE':
          return Object.assign({}, state, {data: state.data.concat(action.payload)})
        default:
          return state
      }
  }

export default testThunkReducer
