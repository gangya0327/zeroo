var prod = {
  name: '女装',
  styles: ['短款', '冬季', '春装']
};
function getTplStr(data){
  var newStr = '<dl class="product"><dt>'
  newStr += data['name'] + '</dt>'
  for(var i = 0; i < data['styles'].length; i++){
    newStr += '<dd>' + data['styles'][i] + '</dd>'
  }
  return newStr
};
var result = getTplStr(prod);  //result为下面的字符串
console.log(result)