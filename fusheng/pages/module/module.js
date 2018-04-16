var order = ["a", "b", "c", "d"];
var index = 0;
var progressNum = 0;
Page({

  data: {
    toView: "a",
    imgUrl: [
      // "https://yys.res.netease.com/pc/zt/20161108171335/data/before_awake/306.jpg",
      // "https://yys.res.netease.com/pc/zt/20161108171335/data/after_awake/306.jpg",
      // "https://yys.res.netease.com/pc/zt/20161108171335/data/before_awake/303.jpg",
      // "https://yys.res.netease.com/pc/zt/20161108171335/data/after_awake/303.jpg"
      "swiper1.jpg",
      "swiper2.jpg",
      "swiper3.jpg",
      "swiper4.jpg"
    ],
    inter: 2000,
    autoplay: true,
    iconType: ['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'],
    progress: 0
  },
  onLoad: function () {
    var that = this
    var timer = setInterval(function () {
      progressNum++;
      if (progressNum >= 100) {
        clearInterval(timer);
      }
      that.setData({
        progress: progressNum
      })
    }, 30)
  },
  autoPlay: function () {
    var autoplay = this.data.autoplay;
    console.log("autoplay:" + !autoplay)
    this.setData({
      autoplay: !autoplay
    })
  },
  sliderChange: function (e) {
    var sliderValue = e.detail.value
    console.log(sliderValue)
    this.setData({
      inter: sliderValue
    })
  },
  swiperChange: function () {
    console.log("swiper change")
  },
  scrolltoupper: function () {
    console.log('碰到顶部或者左边了')
  },
  scrolltolower: function () {
    console.log('碰到底部或右边了')
  },
  scroll: function () {
    console.log("i am scroll")
  },
  tapChange: function () {
    index++;
    if (index > order.length - 1) {
      index = 0;
    }
    this.setData({
      toView: order[index]
    })
  }
})