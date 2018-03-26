var str = getChsDate('2015-01-08');
console.log(str);  // 二零一五年一月八日

function getChsDate(target){
  var dict = '零一二三四五六七八九十'
  var arr = target.split('-')
  var str = ''
  var arrYear = arr[0].split('')
  for(var i = 0; i < arrYear.length; i++){
    str += dict[arrYear[i]]
  }
  str += '年'
  var arrMonth = arr[1].split('')
  for(var i = 0; i < arrMonth.length; i++){
    if(arrMonth[i] !== '0'){
      str += dict[arrMonth[i]]
    }
  }
  str += '月'
  var arrDate = arr[2].split('')
  if(arrDate[0] === '1'){
    str += '十'
  }else if(arrDate[0] === '2'){
    str += '二十'
  }else if(arrDate[0] === '3'){
    str += '三十'
  }
  str += dict[arrDate[1]]
  str += '日'
  return str
}