import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  isLogined: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGINED: 
      return state.set('isLogined', action.value)
    case actionTypes.LOGINOUT: 
      return state.set('isLogined', action.value)
    default:
      return state
  }
}