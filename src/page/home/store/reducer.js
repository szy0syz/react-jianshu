import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: []
})

export default ( state = defaultState, action) => {
  switch (action.type) {
    case 'fetch_home_data':
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })
    default:
      return state
  } 
}