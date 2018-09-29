import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './page/home'
import Detail from './page/detail'
import Header from './common/header'
import Footer from './common/footer'
import store from './store'

class App extends Component {
  render() {
    // 这里表示 Provider 里的所有组件都有能力使用Store数据
    // 或者：Provider 把 store 这些数据都提供给了它内部的这些组件
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <BrowserRouter>
            <Fragment>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </Fragment>
          </BrowserRouter>
          <Footer></Footer>
        </Fragment>
      </Provider>
    )
  }
}

export default App;
