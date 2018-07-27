function errorReducer(state =
  {errorOccurred: false,
    errorMessage: ""
  },

  action) {

    switch (action.type) {
      case 'LOAD_ERROR':
        return Object.assign({}, state, {errorOccurred: true, errorMessage: action.message})
      case 'REMOVE_ERROR':
        return Object.assign({}, state, {errorOccurred: false, errorMessage: ""})
      default:
        return state
    }
  }

export default errorReducer
