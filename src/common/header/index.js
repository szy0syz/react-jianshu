import React from 'react'
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

const Header = (props) => {
  const getListArea = (show) => {
    if (show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            <SearchInfoItem>行具杯2018征文</SearchInfoItem>
            <SearchInfoItem>区块链</SearchInfoItem>
            <SearchInfoItem>小程序</SearchInfoItem>
            <SearchInfoItem>vue</SearchInfoItem>
            <SearchInfoItem>毕业</SearchInfoItem>
            <SearchInfoItem>PHP</SearchInfoItem>
            <SearchInfoItem>故事</SearchInfoItem>
            <SearchInfoItem>flutter</SearchInfoItem>
            <SearchInfoItem>理财</SearchInfoItem>
            <SearchInfoItem>美食</SearchInfoItem>
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

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
          <CSSTransition in={props.isFocused} timeout={330} classNames="slide">
            <NavSearch
              className={props.isFocused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            />
          </CSSTransition>
          <i className={props.isFocused ? 'iconfont focused' : 'iconfont'}>
            &#xe62d;
          </i>
          {getListArea(props.isFocused)}
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

const mapStateToProps = (state) => {
  return {
    // isFocused: state.get('header').get('isFocused')
    isFocused: state.getIn(['header', 'isFocused'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFoucs())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
