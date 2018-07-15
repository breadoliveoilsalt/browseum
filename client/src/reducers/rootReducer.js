import { combineReducers } from 'redux'

import testReducer from './testReducer'
import testThunkReducer from './testThunkReducer'
import currentArtObjectReducer from './currentArtObjectReducer'
import sessionHistoryReducer from './sessionHistoryReducer'

const rootReducer = combineReducers(
  {
    tester: testReducer,
    testThunk: testThunkReducer,
    currentArtObject: currentArtObjectReducer,
    sessionHistory: sessionHistoryReducer

  }
)

export default rootReducer
