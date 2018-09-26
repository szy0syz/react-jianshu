const defaultState = {
  isFocused: false
}

// reducer 导出的必须是一个纯函数：给定一个固定的输入，必须返回一个固定的输出
export default ( state = defaultState, action) => {
  if (action.type === 'search_focus') {
    return {
      isFocused: true
    }
  }

  if (action.type === 'search_blur') {
    return {
      isFocused: false
    }
  }

  return state
}