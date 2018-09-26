import * as actionTypes from './actionTypes'

const defaultState = {
  isFocused: false
}

// reducer 导出的必须是一个纯函数：给定一个固定的输入，必须返回一个固定的输出
export default ( state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    return {
      isFocused: true
    }
  }

  if (action.type === actionTypes.SEARCH_BLUR) {
    return {
      isFocused: false
    }
  }

  return state
}