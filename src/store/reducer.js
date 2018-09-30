import { combineReducers } from 'redux-immutable'
import { reducer as HeaderReducer } from '../common/header/store'
import { reducer as HomeReducer } from '../page/home/store'
import { reducer as DetailReducer } from '../page/detail/store'

export default combineReducers({
  header: HeaderReducer,
  home: HomeReducer,
  detail: DetailReducer
})