import { combineReducers } from 'redux'
import authenticatedUserReducer from './authenticatedUserReducer'
import pollsReducer from './pollsReducer'
import user from './users'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authenticatedUserReducer,
  user,
  pollsReducer,
  loadingBar: loadingBarReducer,
})

