import { combineReducers } from 'redux'

import testReducer from './testReducer'
import testThunkReducer from './testThunkReducer'
import currentArtObjectReducer from './currentArtObjectReducer'

const rootReducer = combineReducers(
  {
    tester: testReducer,
    testThunk: testThunkReducer,
    currentArtObject: currentArtObjectReducer

  }
)

export default rootReducer
