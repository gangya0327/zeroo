function friendlyDate(time){
  var nowDate = new Date()
  var offset = Math.abs(time - nowDate)/1000 //秒级
  console.log(offset)
  if(offset < 60 ){
    return '刚刚'
  }else if(offset < 3600){
    offset = Math.floor(offset / 60)
    return offset + '分钟前'
  }else if(offset < 3600*24){
    offset = Math.floor(offset / 3600)
    return offset + '小时前'
  }else if(offset < 3600*24*30){
    offset = Math.floor(offset / (3600*24))
    return offset + '天前'
  }else if(offset < 3600*24*30*12){
    offset = Math.floor(offset / (3600*24*30))
    return offset + '个月前'
  }else{
    offset = Math.floor(offset / (3600*24*365))
    return offset + '年前'
  }
}
var str = friendlyDate( '1484286699422' ) //  1分钟前
console.log(str)
var str2 = friendlyDate('1483941245793') //4天前
console.log(str2)
var str3 = friendlyDate('1522022400000')
console.log(str3)
var str4 = friendlyDate(new Date('2017-4-1').getTime())
console.log(str4)