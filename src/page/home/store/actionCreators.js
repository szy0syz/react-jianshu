import axios from 'axios'
import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const changeHomeData = (data) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: fromJS(data.topicList),
  articleList: fromJS(data.articleList),
  recommendList: fromJS(data.recommendList)
})

const addHomeData = (data, nextPage) => ({
  type: actionTypes.ADD_HOME_DATA,
  list: fromJS(data),
  nextPage
})

export const fetchHomeData = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      const data = res.data.data
      dispatch(changeHomeData(data))
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get(`/api/homeList.json?page=${page}`).then(res => {
      const data = res.data.data
      dispatch(addHomeData(data, page + 1))
    })
  }
}