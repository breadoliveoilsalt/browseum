import { combineReducers } from 'redux'

// TN: make sure this doesn't cause some kind of loop b/c this file is in ./reducers
import * as reducers from './reducers'

const rootReducer = combineReducers(reducers)

export default rootReducer
