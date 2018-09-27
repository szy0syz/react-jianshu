# React 16.4开发简书项目 从零基础入门到实战

> 练习代码库

## 第2章 React初探

## 第3章 React基础精讲

## 第4章 React高级内容

## 第5章 Redux入门

## 第6章 Redux进阶

## 第7章 项目：Header组件开发

### 7.1 项目搭建

* 清洁template代码
* 使用 `styled-components`
* 使用 `Reset.css`

删除没用的文件，最后只保留`App.js` `index.css` `index.js`

使用 `styled-components` 统一管理组件样式，做到组件样式之间解耦。使用后，我们在组件中就不能直接引入`index.css`文件，而是新建文件 `style.js`来保存css

使用 `Reset.css` 统一不同浏览器内核渲染时出现的不一致问题

### 7.2 简书Header组件布局

创建 `header/index.js` 写react-js代码，在创建 `header/style.js` 放该文件的样式和html代码。我们在styld里把组件的拆分，好比人的细胞一样，一个头拆分成眼睛、鼻子、嘴巴和耳朵，当然还可以再细化

例如：在 `<Nav/>` 组件里，找到小item共性，让后拆分成多个`<NavItem/>`小组件

```js
// header/index.js 结构如下：
class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav></Nav>
      </HeaderWrapper>
    )
  }
}

// header/style.js 结构如下：
export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  background: green;
`
```

在 `style.js` 中，每个组件的样式都是独立的，如果有属性就再补属性即可，这样就是：

    完全遵循组件化思想

### 7-3 简书header组件布局组件化实现

这节课主要使用了 `styled-components` 第三方模块实现了一些带样式的组件，这些组件的样式是独享的，他们之间不会产生任何的相互影响，这就有效的避免了多个组件可能产生的css样式冲突的问题，所以非常建议以后开发时时候使用 `styled-components` 进行项目布局

### 7-4 使用iconfont嵌入头部图标

在网站选好图标后，只需要 `.eot` `.css` `.svg` `.ttf` `.woff` 文件引入项目，修改 `.css` 为 js 文件，然后使用 `import { injectGlobal } from 'styled-components'` 全局注入项目样式中。其中还需要修改 `url()` 的路径，以便方便webpack打包。

使用icon时，先拿到图标唯一的 `unicode` 名称，然后直接 `<i className="iconfont">&#xe636;</i>` 使用即可

### 7-5 使用transition-group实现头部搜索框动画

`CSSTransition`组件其实会帮你在内部组件被挂载到页面前，会把外层的组件上挂载一堆css样式，样式名就是你自定义的`classNames`，款式如：`.slide-enter` `.slide-enter-active` `.slide-exit` `.slide-exit-active`等等，此时就可以在这些样式内写自己的动画代码

    其实和Vue的动画使用方式一样的

优化：把 `.slide-enter` `.slide-exit-active` 最终移动到 `NavSearch`组件上，还需要加 `&` 保存层叠关系

### 7-6 使用Redux进行数据管理

`sotre` 好比一个实例仓库管理，但它不知道如何管理货物进出，得招聘一个 `reducer` 仓管员给仓库才行！

`reducer` 导出的必须是一个纯函数：给定一个固定的输入，必须返回一个固定的输出

使用reduc的dispatch出action改变reduc中的state

最终Header组件被拆解为一个“无状态组件”，如果这样，其实我们又可以把这个组件写成一个 “**函数**”。如果把一个组件写成无状态组件后，它的性能和可测试性都有提高

### 7-7 使用combineReducers对数据拆分管理

`redux-devtools-extension`

reducer如果存放过多数据，可能会造成代码的不可维护，那么我们把一个reducer拆分成很多个子reducer，最终再做一个整合即可。

### 7-8 actionCreators与constants的应用拆分数据

首先在header组件的store里创建 `actionCreators.js`，用于返回action函数

再创建 `actionTypes.js`，用于存储action type的常量

```js
// 'header' 表示命名空间，防止命名冲突
export const SEARCH_FOCUS = 'header/SEARCH_FOCUS'
```

在header组件的store里统一对外导出 `index.js` 文件，方便导出变量管理。这样我们就把一个组件展示的代码和数据管理的代码统一放到了一个文件夹下，这样以后管理组件就很方便迭代了

### 7-9 使用immutable来管理store中的数据

`immutable.js`这个库是Facebook耗时三年开发的一个库，它可以帮助我们生成一个 `immutable` 对象，这个对象是不可改变的。假设 reducer 中的 state 是一个 immutable 对象，那么 state 就不可以被改变，那么reducer就不会出问题

使用步骤：

* `import { fromJS } from 'immutable'`
* `const defaultState = fromJS({ isFocused: false })`
* `isFocused: state.header.get('isFocused')` 在业务组件中修改 mapStateToProps 的方式
* 回到header组件的reducer中，此时不能直接使用 `{ isFocused: true }`，因为次吃state是一个 immutable对象，是不允许修改的，所有我们得用 `set()` 方法
* 接着immutable对象的set方法，会结合之前 immutable 对象的值和设置的值，返回一个 [全新的对象]，其实set方法并不会去改变原先对象里的值！

### 7-10 使用redux-immutable统一数据格式

`state.header.get('isFocused')` 这段代码，第一个 `.` 是js方式的获取属性，但回去到的是 immutable 对象，再接着又用 `.get` 的immutable 方式获取属性，这样就是获取数据的不统一

原来这样获取`import { combineReducers } from 'redux'`，现在这样获取`import { combineReducers } from 'redux-immutable'`，用redux-immutable导出的combineReducers函数返回的就是一个immutable对象

此时，项目从头到尾的架子基本打完，接下来就是往架子上挂肉的过程，那这个过程就会简单很多

### 7-11 热门搜索样式布局

创建了在 `isFocused` 为 `true` 时，通过js代码直接把样式放到页面中去，不用css控制，这点可能太过于极端？

### 7-12 Ajax获取热门推荐

获取异步数据不能直接写在组件里，我们需要把异步操作放在action或者redux-sega里处理，该项目我们统一使用redux-thunk中间件用action来处理

`redux-thunk`是redux的一个中间件，它使得我们可以

```js
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
))
```

如何在`create-react-app`项目中mock数据呢？

其实在 `create-react-app` 底层也运行着一个node服务器，当访问`/api/headerList.json`时，node服务器会先到工程目录下看有没有这样的路由，如果找不到，就会去`/public`目录下去找，如果找到就把这个文件返回，如果没找到返回404错误

问题：

```js
const defaultState = fromJS({
  isFocused: false,
  list: []    // 此时，list属性对应的数据已经被immutable转换成了immutable的数据，不再是一个普通数据
})

// return state.set('list', action.data)
// 而在reducer里，我们尝试用action.data这个普通的js数据赋值给 immutable-array数据时，一定是报错的
```

解决：在源头 `actionCreators`里发送前就把js-array转换成immutable-array就可以了

```js
const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data)
})
```

    注意：在组件的 render 中使用 `mapStateToProps` 后，props 仍然是 immutable对象，但immutable-array仍然提供一些数组的基本方法

### 7-13 代码优化微调

解构 `this.props`
`if` 转 `switch`

### 7-14 热门搜索换页功能实现

```js
// return state.set('list', action.data).set('totalPage', action.totalPage)
return state.merge({
  list: action.data,
  totalPage: action.totalPage
})
```

## 第8章 项目：首页开发

## 第9章 项目：详情页面和登录功能开发

## 第10章 课程总结
