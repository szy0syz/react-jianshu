import React, { PureComponent, Fragment } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './page/home'
import Detail from './page/detail'
import Login from './page/login'
import Header from './common/header'
import Footer from './common/footer'
import Write from './page/write'
import store from './store'

class App extends PureComponent {
  render() {
    // 这里表示 Provider 里的所有组件都有能力使用Store数据
    // 或者：Provider 把 store 这些数据都提供给了它内部的这些组件
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
            <Footer></Footer>
          </Fragment>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
