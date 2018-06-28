import { combineReducers } from 'redux'

import testReducer from './testReducer'

const rootReducer = combineReducers(
  {tester: testReducer}
)

export default rootReducer
