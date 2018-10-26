
import { combineReducers } from 'redux'
import ledger from './ledger'
import items from './items'
import user from './user'

export default combineReducers({
  ledger,
  items,
  user,
})