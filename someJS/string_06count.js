var str = 'halkdjafkjioennnnadffdfasfsf'
function frequency(str){
  var obj = {} //obj={'a': 2,'b':3}
  var len = str.length
  for(var i = 0; i < len; i++){
    if(obj[str[i]]){
      obj[str[i]]++
    }
    else{
      obj[str[i]] = 1
    }
  }
  var max = 'a'
  for(item in obj){
    if(obj[item] > obj[max]){
      max = item
    }
  }
  console.log(obj)
  console.log(max)
}
frequency(str)