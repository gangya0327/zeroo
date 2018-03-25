function squareArr(arr){
  var len = arr.length
  for(var i = 0; i < len; i++){
    arr[i] = Math.pow(arr[i], 2)
  }
}
var arr = [2, 4, 6]
squareArr(arr)
console.log(arr) // [4, 16, 36]