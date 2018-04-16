Page({
  tomessage: function(){
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
  }
})