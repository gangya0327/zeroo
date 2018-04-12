// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArray: [{
      id: 1,
      img: '../../image/li1.jpg',
      title: '春语入绘 匠心结缘 《阴阳师》创作大赛集结再启！',
      time: '2018-04-12'
    }, {
      id: 2,
      img: '../../image/li2.jpg',
      title: '青灯幽幽莲影现 《阴阳师》手办情报速递！',
      time: '2018-04-11'
    }, {
      id: 3,
      img: '../../image/li3.jpg',
      title: '如何正确打开鬼灯？',
      time: '2018-04-09'
    }, {
      id: 4,
      img: '../../image/li4.jpg',
      title: '暗影重重血月祭 《阴阳师》吸血姬新装来袭！',
      time: '2018-04-08'
    }, {
      id: 5,
      img: '../../image/li5.jpg',
      title: '绮美绘卷 现世降临 《阴阳师》音乐剧幕后故事终极揭秘！',
      time: '2018-04-06'
    }, {
      id: 6,
      img: '../../image/li6.jpg',
      title: '彼世客降临！《阴阳师》鬼灯之卷正式开启',
      time: '2018-04-04'
    }, {
      id: 7,
      img: '../../image/li7.jpg',
      title: '百鬼降临 命运相生 《阴阳师》音乐剧幕后故事揭秘！',
      time: '2018-04-03'
    }, {
      id: 8,
      img: '../../image/li8.jpg',
      title: '珠蕊凝霜 赤花入刃 《阴阳师》彼岸花新装降临',
      time: '2018-04-02'
    }]
  },
  goDetail: function(){
    wx.navigateTo({
      url: '../detail/detail',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})