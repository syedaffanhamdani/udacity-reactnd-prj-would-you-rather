import { combineReducers } from 'redux'
import authenticatedUserReducer from './authenticatedUserReducer'
import pollsReducer from './pollsReducer'
import users from './users'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authenticatedUserReducer,
  users,
  pollsReducer,
  loadingBar: loadingBarReducer,
})

