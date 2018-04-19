var api_url = 'https://douban.uieee.com/v2/movie/subject/'

Page({
  data: {
    movie: {}
  },
  onLoad: function (param) {
    var that = this
    wx.showLoading({
      title: '正在读取信息',
    })
    wx.request({
      url: api_url + param.id,
      data: {},
      header: {
        'content-type': 'json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        wx.hideLoading()
        that.setData({
          movie: res.data
        })
      }
    })
  }
})