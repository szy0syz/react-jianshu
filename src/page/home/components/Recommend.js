import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RecommendWrapper, RecommendItem } from '../styled'

class Recommend extends Component {
  render() {
    const { list } = this.props
    return(
      <RecommendWrapper>
        {
          list.map((item) => (
            <RecommendItem key={item.get('id')} cover={item.get('cover')}></RecommendItem>
          ))
        }
      </RecommendWrapper>
    ) 
  }
}

const matState = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})

export default connect(matState, null)(Recommend)