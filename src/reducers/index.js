import { combineReducers } from 'redux'
import authenticatedUser from './authenticatedUser'
import questions from './questions'
import users from './users'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authenticatedUser,
  users,
  questions,
  loadingBar: loadingBarReducer,
})

