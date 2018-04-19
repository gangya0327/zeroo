var api_url = "https://douban.uieee.com/v2/movie/top250"

Page({
  data: {
    title: '加载中',
    movies: []
  },
  onLoad: function () {
    var that = this
    wx.showToast({
      title: '加载中...',
      icon: "loading",
      duration: 10000
    })
    wx.request({
      url: api_url,
      data: {},
      header: {
        'content-type': 'json' // 默认值
      },
      success: function (res) {
        wx.hideToast()
        var data = res.data
        that.setData({
          title: data.title,
          movies: data.subjects
        })
        //console.log(res.data)
      }
    })
  }
})