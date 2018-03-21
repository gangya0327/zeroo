function DatePick($target){
  this.init();
  this.render();
  this.bind();
}
DatePick.prototype = {
  init: function($target){
    this.date = new Date()
    this.$target = $target
  },
  render: function(){
    var tpl = '<div class="ui-datepicker" style="display: none;">'
            +   '<div class="header">'
            +     '<i class="fa fa-chevron-left fa-lg"></i>'
            +     '<span class="head-date">2018年3月</span>'
            +     '<i class="fa fa-chevron-right fa-lg"></i>'
            +   '</div>'
            + '<table class="panel">'
            + '<thead><tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr></thead>'
            + '<tbody></tbody>'
            + '</div>'
    this.$datepicker = $(tpl)
    $('body').append(this.$datepicker)

  },
  bind: function(){}
}
var datepick = new DatePick($('#start-date'))