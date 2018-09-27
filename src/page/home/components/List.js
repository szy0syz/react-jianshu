import React, { Component } from 'react'
import { ListItem, ListInfo } from '../styled'
import { connect } from 'react-redux'

class List extends Component {
  render() {
    const { list } = this.props
    return (
      list.map((item) => (
        <ListItem  key={item.get('id')}>
          <img className="pic" src={item.get('cover')} alt={item.get('id')}/>
          <ListInfo>
            <h3 className="title">{item.get('title')}</h3>
            <p className="desc">{item.get('desc')}</p>
          </ListInfo>
        </ListItem>
      ))
    ) 
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList'])
})

export default connect(mapState)(List)