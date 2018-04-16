var api = "https://api.douban.com/v2/book/1220562";//用于返回豆瓣接口

Page({
  data: {
  },
  showToast: function () {
    wx.showToast({
      title: '删除成功',
      icon: "loading",
      duration: 3000,
      success: function () {
        console.log("显示消息框")
      }
    });
    wx.request({
      url: api,
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        wx.hideToast()
      }
    })
  },
  showAction: function () {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      itemColor: 'blue',
      success: function (res) {
        if (!res.cancel) {
          console.log(res.tapIndex)
        }
      }
    })
  },
  showModal: function () {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      cancelText: "点我",
      confirmText: "好的",
      showCancel: false,
      success: function (res) {
        console.log(res)
      }
    })
  }
})