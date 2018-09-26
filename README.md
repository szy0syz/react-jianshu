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

## 第8章 项目：首页开发

## 第9章 项目：详情页面和登录功能开发

## 第10章 课程总结
