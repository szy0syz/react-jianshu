import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'
import  { LoginWrapper, LoginBox, Input, Botton } from './styled'

class Login extends PureComponent {
  render() {
    const { isLogined } = this.props
    if (!isLogined) {
      return(
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' innerRef={(input) => {this.username = input}} />
            <Input placeholder='密码' type='password' innerRef={(input) => {this.password = input}}/>
            <Botton onClick={() => {this.props.login(this.username, this.password)}}>登录</Botton>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/' />
    }
    
  }
}

const mapState = (state) => ({
  isLogined: state.getIn(['login', 'isLogined'])
})

const mapDispatch = (dispatch) => ({
  login(usernameElem, passwordElem) {
    dispatch(actionCreators.login(usernameElem.value, passwordElem.value))
  }
})

export default connect(mapState, mapDispatch)(Login)