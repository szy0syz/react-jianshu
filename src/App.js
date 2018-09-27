import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
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
              <Route path='/' exact render={() => <div>Home</div>}></Route>
              <Route path='/detail' exact render={() => <div>Detail</div>}></Route>
            </Fragment>
          </BrowserRouter>
        </Fragment>
      </Provider>
    )
  }
}

export default App;
