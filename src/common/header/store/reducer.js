import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  isFocused: false,
  isMouseIn: false,
  list: [],
  page: 0,
  totalPage: 1
})

// reducer 导出的必须是一个纯函数：给定一个固定的输入，必须返回一个固定的输出
export default ( state = defaultState, action) => {
  // immutable对象的set方法，会结合之前 immutable 对象的值和设置的值
    //   ...返回一个 [全新的对象] !!!
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('isFocused', true)
    case actionTypes.SEARCH_BLUR:
      return state.set('isFocused', false)
    case actionTypes.CHANGE_LIST:
      // return state.set('list', action.data).set('totalPage', action.totalPage)
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case actionTypes.MOUSE_ENTER:
      return state.set('isMouseIn', true)
    case actionTypes.MOUSE_LEAVE:
      return state.set('isMouseIn', false)
      case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  } 
}