function errorReducer(state =
  {errorOccurred: false,
    errorMessage: ""
  },

  action) {

    switch (action.type) {
      case 'ADD_ERROR':
        return Object.assign({}, state, {errorOccurred: true, errorMessage: action.message})
      default:
        return state
    }
  }

export default errorReducer

// up to here...now add this to rootReducer
