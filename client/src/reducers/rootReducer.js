import { combineReducers } from 'redux'

import currentArtObjectReducer from './currentArtObjectReducer'
import sessionHistoryReducer from './sessionHistoryReducer'
import extendedHistoryReducer from './extendedHistoryReducer'
import errorReducer from './errorReducer'


const rootReducer = combineReducers(
  {
    currentArtObject: currentArtObjectReducer,
    sessionHistory: sessionHistoryReducer,
    extendedHistory: extendedHistoryReducer,
    error: errorReducer
  }
)

export default rootReducer
