import React, { Component } from 'react'
// 这个组件就是一个div标签上面带了些样式
import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWarpper
} from './style'

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWarpper>
            <NavSearch></NavSearch>
            <i className="iconfont">&#xe62d;</i>
          </SearchWarpper>
        </Nav>
        <Addition>
            <Button className="writting">
              <i className="iconfont">&#xe96c;</i>
              写文章
            </Button>
            <Button className="reg">注册</Button>
          </Addition>
      </HeaderWrapper>
    )
  }
}

export default Header