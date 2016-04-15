import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import parser from './modules/parser'

export default combineReducers({
  parser,
  router
})
