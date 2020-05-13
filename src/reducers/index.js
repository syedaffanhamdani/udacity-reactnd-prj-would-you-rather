import { combineReducers } from 'redux'
import authenticatedUserReducer from './authenticatedUserReducer'
import pollsReducer from './pollsReducer'
import usersReducer from './usersReducer'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authenticatedUserReducer,
  usersReducer,
  pollsReducer,
  loadingBar: loadingBarReducer,
})

