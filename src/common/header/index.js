import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";
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
} from "./style";

class Header extends Component {
  getListArea = () => {
    const { isFocused, isMouseIn, list, page, totalPage, handleChangePage, handleMouseEnter, handleMouseLeave } = this.props;
    let jsList = list.toJS() || []
    let pageList = []

    if (jsList.length) {
      for (let i = page * 10; i < (page + 1) * 10; i++) {
        if(jsList[i]) {
          pageList.push(
            <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
          )
        }
      }
    }

    if (isFocused || isMouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>
              <i className="iconfont">&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };

  render() {
    const { isFocused, handleInputFocus, handleInputBlur } = this.props;
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
            <CSSTransition in={isFocused} timeout={330} classNames="slide">
              <NavSearch
                className={isFocused ? "focused" : ""}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={isFocused ? "iconfont focused" : "iconfont"}>
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
    );
  }
}

const mapStateToProps = state => {
  return {
    isMouseIn: state.getIn(['header', 'isMouseIn']),
    isFocused: state.getIn(['header', 'isFocused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFoucs());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage) {
      if (page < totalPage - 1) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(0))
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
