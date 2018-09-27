import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// sotre 好比一个实例仓库管理，但它不知道如何管理货物进出，得招聘一个reducer仓管员给仓库才行！
// 再比如：一个仓库里很多不同类型的货物，一个仓管员一个类别一个类别的去找，那就很浪费，所以我们得雇佣很多仓管员，不同仓管员去负责某个区域的货物，这样性能就会有很大提升。
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
))

export default store