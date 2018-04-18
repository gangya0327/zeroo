var api_url = "https://t.yushu.im/v2/movie/top250"
var api_url1 = "https://t.yushu.im/v2/book/1220562"
var api_url2 = "https://api.douban.com/v2/movie/in_theaters"

Page({
  data: {
    movies: []
  },
  onLoad: function(){
    wx.showToast({
      title: '加载中...',
      icon: "loading",
      duration: 10000
    })
    wx.request({
      url: api_url1,
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res){
        console.log(res.data)
      }
    })
  }
})