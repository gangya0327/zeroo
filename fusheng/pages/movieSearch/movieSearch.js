var api_url = 'https://douban.uieee.com/v2/movie/search'

Page({
  data: {
    movies: []
  },
  searchMovie: function (e) {
    if (!e.detail.value) return
    wx.showLoading({
      title: '正在查找...'
    })
    var that = this
    wx.request({
      url: api_url + '?q=' + e.detail.value,
      data: {},
      header: {
        'content-type': 'json' // 默认值
      },
      success: function (res) {
        wx.hideLoading()
        that.setData({
          movies: res.data.subjects
        })
      }
    })
  }
})