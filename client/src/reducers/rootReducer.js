import { combineReducers } from 'redux'

import currentArtObjectReducer from './currentArtObjectReducer'
import sessionHistoryReducer from './sessionHistoryReducer'
import errorReducer from './errorReducer'

const rootReducer = combineReducers(
  {
    currentArtObject: currentArtObjectReducer,
    sessionHistory: sessionHistoryReducer,
    error: errorReducer
  }
)

export default rootReducer
