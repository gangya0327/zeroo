// pages/detail/detail.js
var wxParse = require('../../wxParse/wxParse.js')
/**
* WxParse.wxParse(bindName , type, data, target,imagePadding)
* 1.bindName绑定的数据名(必填)
* 2.type可以为html或者md(必填)
* 3.data为传入的具体数据(必填)
* 4.target为Page对象,一般为this(必填)
* 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
*/
Page({
  data: {
    info: {
      id: 1,
      img: '../../image/li1.jpg',
      title: '春语入绘 匠心结缘 《阴阳师》创作大赛集结再启！',
      time: '2018-04-12',
      content1: '携手走过每日逢魔，一起挑战八歧大蛇，共斗麒麟。同在平安京，阴阳师的经历各有不同，在才华横溢的阴阳师眼中的平安京是怎样呢？',
      content2: '多领域创作大赛—大触觉醒·阴阳师创作大赛，再次集结！春语入绘，匠心结缘，大触觉醒·阴阳师创作大赛，和你一起赏尽芳菲！',
      content3: '大触觉醒系列比赛中，绮妆魅服cosplay大赛、百绘罗衣式神皮肤设计大赛和礼乐和鸣音乐大赛已抢先一步和大家见面;更多精彩大赛纷至沓来，大触在此觉醒！'
    }
  }
})