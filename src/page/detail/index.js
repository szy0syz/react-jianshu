import React, { PureComponent } from 'react'
import { DetailWrapper, Header, Content } from './styled'
import { connect } from 'react-redux'

class Detail extends PureComponent {
  render() {
    return(
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}}/>
      </DetailWrapper>
    ) 
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

export default connect(mapState, null)(Detail)