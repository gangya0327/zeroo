function camelize(str){
  var arr = str.split('-')
  for(var i = 1; i < arr.length; i++){
    var arrChild = arr[i].split('')
    arrChild[0] = arrChild[0].toUpperCase()
    arr[i] = arrChild.join('')
  }
  var newArr = arr.join('')
  console.log(newArr)

}
camelize("back-ground-color") //'backgroundColor'
camelize("list-style-image")

function ucFirst(str){
  var newStr = str.split('')
  newStr[0] = newStr[0].toUpperCase()
  str = newStr.join('')
  console.log(str)
}
ucFirst("hunger")