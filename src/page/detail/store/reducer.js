import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  title: '月老和孟婆的故事',
  content: `<img src="https://upload-images.jianshu.io/upload_images/5029455-3c72b23e771ed018.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/599/format/webp" alt="aa1"/><p>很久很久以前，月老不叫月老，孟婆也不是孟婆。</p><p>癸卯仲夏，天气热的比往年更甚了些。人们每日从地里回来就一齐聚到老孟的茶楼去。熙熙攘攘的，只一刻钟便将茶楼围了个水泄不通。</p><p>“老孟啊，人都到了，快开始讲吧！”前排的一个人大声地招呼老孟，其他人听了也连声附和。老孟照例环视四周，确保每个他认识的看客都到了地方。随即清了清嗓子，一边抚着白白的长须一边开口，“各位看官，今日老孟我啊，要给诸位讲讲那天上月老的一桩前尘旧事：</p><p>现在啊，咱们大家都知道，那红衣月老掌管世上姻缘，素衣孟婆专消亡者恩怨。请问诸位，这是也不是？”</p><p><b>“那是当然了，月老和孟婆的事我们打小就知道了！老孟，你还是换个有意思的吧！”</b></p>`
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}