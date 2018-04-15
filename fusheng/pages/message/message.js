// pages/message/message.js
var app = getApp();
var common = require("../../common/common")
Page({
  data: {
    name: "peter",
    pass: null,
    id: 6,
    ifbool: false,
    arr: [1, 2, 3, 4, 5],
    myobj: { a: 1, b: 9 }
  },
  onLoad: function (option) {
    this.setData({
      pass: app.globalData.pass
    })
  },
  outer: function () {
    console.log('outer')
  },
  inner: function () {
    console.log('innner')
  },
  showIfbool: function () {
    var ifbool = this.data.ifbool;
    this.setData({
      ifbool: !ifbool
    })
  },
  sayHello: function () {
    common.sayHello(this.data.name);
  },
  backIndex: function () {
    wx.navigateTo({
      url: '../new/new',
      success: function () {
        console.log("success navigate")
      }
    })
  }
})