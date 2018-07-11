import { combineReducers } from 'redux'

import testReducer from './testReducer'
import testThunkReducer from './testThunkReducer'

const rootReducer = combineReducers(
  {
    tester: testReducer,
    testThunk: testThunkReducer

  }
)

export default rootReducer
