Page({
  data: {
    disabledBool: true,
    country: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    citys: ["北京", "上海", "杭州", "深圳"],
    citysIndex: 0,
    time: "09:35",
    date: "2018-04-16"
  },
  linechange: function(e){
    console.log(e.detail)
  },
  switchchange: function(e){
    console.log(e.detail.value)
  },
  sliderchange: function(e){
    console.log(e.detail.value)
  },
  radiochange: function (e) {
    console.log(e.detail.value)
  },
  datePicker: function (e) {
    console.log(e.detail.value);
    this.setData({
      date: e.detail.value
    })
  },
  timePicker: function (e) {
    console.log(e.detail.value);
    this.setData({
      time: e.detail.value
    })
  },
  pickerEvent: function (e) {
    console.log(e.detail.value);
    this.setData({
      citysIndex: e.detail.value
    })
  },
  blurEvent: function () {
    console.log("blur~")
  },
  focusEvent: function () {
    console.log("focus!")
  },
  inputEvent: function (e) {
    console.log('inputing...', e.detail.value)
  },
  checkedchange: function (e) {
    console.log(e.detail.value)
  },
  invokeBtn: function () {
    this.setData({
      disabledBool: !this.data.disabledBool
    })
  },
  submitEvent: function (e) {
    console.log("表单被提交", e.detail);
  },
  resetEvent: function () {
    console.log("表单被重置")
  }
})