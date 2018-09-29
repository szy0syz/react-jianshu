import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { WriterWrapper, WriterItem } from '../styled'

class Writer extends PureComponent {
  render() {
    return(
      <WriterWrapper>
        <WriterItem></WriterItem>
      </WriterWrapper>
    ) 
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'writerList'])
})

export default connect(mapState, null)(Writer)