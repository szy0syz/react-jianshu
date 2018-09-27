import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchInfo,
  SearchInfoItem,
  SearchInfoList,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchWarpper
} from './style'

class Header extends Component {
  getListArea = () => {
    const { isFocused, list } = this.props
    if (isFocused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            { 
              list.map((item) => { return <SearchInfoItem key={item}>{item}</SearchInfoItem> })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const { isFocused, handleInputFocus, handleInputBlur } = this.props
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
            <CSSTransition
              in={isFocused}
              timeout={330}
              classNames="slide"
            >
              <NavSearch
                className={isFocused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={isFocused ? 'iconfont focused' : 'iconfont'}>
              &#xe62d;
            </i>
            {this.getListArea()}
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

const mapStateToProps = state => {
  return {
    // isFocused: state.get('header').get('isFocused')
    isFocused: state.getIn(['header', 'isFocused']),
    list: state.getIn(['header', 'list'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFoucs())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
