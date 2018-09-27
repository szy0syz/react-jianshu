import React, { Component } from 'react'
import Tpoic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { HomeWrapper, HomeLeft, HomeRight } from './styled'

class Home extends Component {
  render() {
    return(
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4486/41d9173c44ce6eded75da5f82da659973ddaad41.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="cover1"/>
          <Tpoic></Tpoic>
          <List></List>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeLeft>
        <HomeRight>right</HomeRight>
      </HomeWrapper>
    ) 
  }
}

export default Home