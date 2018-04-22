Page({
  data: {
    res: {},
    info: '登录信息'
  },
  login: function () {
    var that = this    
    wx.login({
      success: function (res) {
        console.log(res.code)        
        wx.request({
          url: 'https://fushengliudao.applinzi.com/login.php',
          data: { 
            code: res.code 
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: function (res) {
            console.log(res.data)
            that.setData({
              res: res.data,
              info: 'xinxi'
            })
          }
        })
      }
    })
  }
})