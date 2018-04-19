Page({
  data: {
    imgSrc: ''
  },
  downloadImg: function(){
    var that = this
    wx.downloadFile({
      url: 'https://fushengliudao.applinzi.com/TIM%E5%9B%BE%E7%89%8720171202231657.png',
      success: function(res){
        that.setData({
          imgSrc: res.tempFilePath
        })
      }
    })
  },
  uploadImg: function () {
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({
          imgSrc: tempFilePaths[0]
        })
        wx.uploadFile({
          url: 'https://fushengliudao.applinzi.com/upload.php',
          filePath: tempFilePaths[0],
          name: 'fileup',
          success: function(res){
            var data = res.data
            console.log(data)
          },
          fail: function(){
            console.log('fail')
          }
        })
      }
    })
  },
  tomessage: function () {
    wx.navigateTo({
      url: "../message/message"
    })
  },
  tomodule: function () {
    wx.navigateTo({
      url: "../module/module"
    })
  },
  toform: function () {
    wx.navigateTo({
      url: "../form/form"
    })
  },
  tooperate: function () {
    wx.navigateTo({
      url: "../operate/operate"
    })
  },
  tomedia: function () {
    wx.navigateTo({
      url: "../media/media"
    })
  },
  tocanvas: function () {
    wx.navigateTo({
      url: "../canvas/canvas"
    })
  },
  tosnake: function () {
    wx.navigateTo({
      url: "../snake/snake"
    })
  }
})