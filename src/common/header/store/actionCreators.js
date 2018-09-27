import axios from 'axios'
import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

export const searchFoucs = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data)
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data
      dispatch(changeList(data.data))
      console.log(data)
    }).catch((err) => {
      console.error(err)
    })
  }
}
