import axios from 'axios'
import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const changeHomeDate = (data) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: fromJS(data.topicList),
  articleList: fromJS(data.articleList),
  recommendList: fromJS(data.recommendList)
})

export const fetchHomeData = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      const data = res.data.data
      dispatch(changeHomeDate(data))
    })
  }
}
