import { combineReducers } from 'redux'

import currentArtObjectReducer from './currentArtObjectReducer'
import sessionHistoryReducer from './sessionHistoryReducer'
import extendedHistoryReducer from './extendedHistoryReducer'
import favoritesReducer from './favoritesReducer'
import errorReducer from './errorReducer'


const rootReducer = combineReducers(
  {
    currentArtObject: currentArtObjectReducer,
    sessionHistory: sessionHistoryReducer,
    extendedHistory: extendedHistoryReducer,
    favorites: favoritesReducer,
    error: errorReducer
  }
)

export default rootReducer
