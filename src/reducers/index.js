import { combineReducers } from 'redux'
import authenticatedUser from './authenticatedUser'
import pollsReducer from './pollsReducer'
import users from './users'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authenticatedUser,
  users,
  pollsReducer,
  loadingBar: loadingBarReducer,
})

