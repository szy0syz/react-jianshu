import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
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
  constructor(props) {
    super(props)
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }
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
            <CSSTransition in={this.props.isFocused} timeout={330} classNames="slide">
              <NavSearch
                className={this.props.isFocused ? 'focused' : ''}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              />
            </CSSTransition>
            <i className={this.props.isFocused ? 'iconfont focused' : 'iconfont'}>
              &#xe62d;
            </i>
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

  handleInputFocus() {
    this.setState({
      isFocused: true
    })
  }
  // 7-6 [15:31]
  handleInputBlur() {
    this.setState({
      isFocused: false
    })
  }
}

const mapStateToProps = (state) => {
  return {
    isFocused: state.isFocused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
