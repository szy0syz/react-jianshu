import { createStore } from 'redux'
import reducer from './reducer'

// sotre 好比一个实例仓库管理，但它不知道如何管理货物进出，得招聘一个reducer仓管员给仓库才行！
const store = createStore(reducer);

export default store