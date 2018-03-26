var str = getChIntv("2017-02-08");
console.log(str);  // 距除夕还有 20 天 15 小时 20 分 10 秒

function getChIntv(target){
  var targetDate = new Date(target)
  var nowDate = new Date()
  var offsetTime = targetDate - nowDate - 8*60*60*1000
  offsetTime > 0 ? isPass = ' 还有 ' : isPass = ' 已过去 '
  offsetTime = Math.abs(offsetTime) / 1000 //秒级
  var getDates = Math.floor( offsetTime / (60*60*24) )
  offsetTime = offsetTime % (60*60*24) //除去天数后的秒数
  var getHours = Math.floor( offsetTime / (60*60) )
  offsetTime = offsetTime % (60*60) //除去小时数后的秒数
  var getMinutes = Math.floor( offsetTime / 60 )
  offsetTime = offsetTime % 60 //除去分钟数后的秒数
  var getSeconds = Math.floor( offsetTime )
  console.log(getSeconds)

  return '距 ' + target + isPass + getDates +' 天 ' + getHours
  + ' 小时 ' + getMinutes + ' 分 ' + getSeconds + ' 秒'
}