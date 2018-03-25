function isHUI(str){
  var len = str.length
  for(var i = 0; i < len/2; i++){
    if(str[i] == str[len-i-1]){
      continue
    }else{
      console.log('str不是回文字符串')
      return
    }
  }
  console.log('str是回文字符串')
}
isHUI('abcb')