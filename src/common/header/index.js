import React, { Component } from 'react'
// 这个组件就是一个div标签上面带了些样式
import { HeaderWrapper, Logo, Nav } from './style'

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          
        </Nav>
      </HeaderWrapper>
    )
  }
}

export default Header