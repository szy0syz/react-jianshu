import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '故事',
    imgUrl: 'https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }, {
    id: 2,
    title: '自然科普',
    imgUrl: 'https://upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  },{
    id: 3,
    title: '简书电影',
    imgUrl: 'https://upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  },{
    id: 4,
    title: '摄影',
    imgUrl: 'https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  },{
    id: 5,
    title: '@IT互联网',
    imgUrl: 'https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  },{
    id: 6,
    title: '手绘',
    imgUrl: 'https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  },{
    id: 7,
    title: '读书',
    imgUrl: 'https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }],
  articleList: [
    {
      id: 'a1',
      title: '大二暑假，去了7座城市，边旅行边赚钱',
      desc: '这是少年探险记的 第3期 目的地：7座城池 暑假为期一个月的旅行结束 8月7号凌晨，我顺利地抵达长沙黄花国际机场。 旁若无人地录制完最后一段旅行...', 
      cover: 'https://upload-images.jianshu.io/upload_images/3200481-c90e5e6ad89272bf?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },
    {
      id: 'a2',
      title: '做笔记浪费好多时间啊” “你抄书呢？！',
      desc: '本文为小白考研原创文章，未授权任何第三方平台进行转载。如果大家发现有人抄袭本文章，请积极向我们举报！违者必究！ ​ 最近收到一位小小白...', 
      cover: 'https://upload-images.jianshu.io/upload_images/1864045-bc4bfa20a3a011e8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },
    {
      id: 'a3',
      title: '画黑板能画这么逆天，我盘点了这几位大神',
      desc: '转载自公众号:画学（huaxuea） 在我们读书那会 记忆中从幼儿园到高中 教室后面的黑板画是这样的 一般是叫文艺委员 或者画画的稍微好一点的去...', 
      cover: 'https://upload-images.jianshu.io/upload_images/10812003-edd913ecfd64c729?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },
    {
      id: 'a4',
      title: '黑客手机桌面，牛人都这样玩！',
      desc: '之前“事儿哥”给大家介绍过不少好玩的手机桌面，比如视频手机桌面，很多人就觉得非常有趣，可以把自己喜欢的视频设制成手机桌面，每天看一看心情也会特别...', 
      cover: 'https://upload-images.jianshu.io/upload_images/1780541-58a7b62d0e6a81d6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    }
  ],
  recommendList: [
    {
      id: '1',
      cover: 'https://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
    },
    {
      id: '2',
      cover: 'https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
    },
    {
      id: '3',
      cover: 'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },
    {
      id: '4',
      cover: 'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },
    {
      id: '5',
      cover: 'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    }
  ],
  writerList: [
    {
      id: 'w1',
      nickname: '须僧',
      desc: '写了258.3k字 · 4.1k喜欢',
      avatar: 'https://upload.jianshu.io/users/upload_avatars/11557689/ed2ea7f3-9d7d-41fc-a05a-daebb8097b0c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
    {
      id: 'w2',
      nickname: '红瑀',
      desc: '写了307.8k字 · 10.7k喜欢',
      avatar: 'https://upload.jianshu.io/users/upload_avatars/2844887/cf3b6f90-774a-4ea7-9e59-b29f2f4b7ad6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
    {
      id: 'w3',
      nickname: '简书版权',
      desc: '写了475.1k字 · 41.2k喜欢',
      avatar: 'https://upload.jianshu.io/users/upload_avatars/1835526/9bc600ce-7672-42b8-b03b-1a779593dd45.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
    {
      id: 'w4',
      nickname: '念远怀人',
      desc: '写了582.3k字 · 5.9k喜欢',
      avatar: 'https://upload.jianshu.io/users/upload_avatars/7290998/f64f5ef0-def0-4b26-beb3-b9d88f060ba0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
    {
      id: 'w5',
      nickname: '名贵的考拉熊',
      desc: '写了237.3k字 · 16.2k喜欢',
      avatar: 'https://upload.jianshu.io/users/upload_avatars/7663825/7c28763e-002b-4e89-8dea-5b8da210ef2c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    }
  ]
})

// reducer 导出的必须是一个纯函数：给定一个固定的输入，必须返回一个固定的输出
export default ( state = defaultState, action) => {
  // immutable对象的set方法，会结合之前 immutable 对象的值和设置的值
    //   ...返回一个 [全新的对象] !!!
  switch (action.type) {
    default:
      return state
  } 
}