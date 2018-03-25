function filterPositive(arr){
  var len = arr.length
  var newArr = []
  for(var i = 0; i < len; i++){
    if( (typeof arr[i]) === 'number'){
      if(arr[i] > 0){
        newArr.push(arr[i])
      }
    }
  }
  return newArr
}
var arr = [3, -1,  2,  '饥人谷', true]
var newArr = filterPositive(arr)
console.log(newArr) //[3, 2]
console.log(arr) //[3, -1,  2,  '饥人谷', true]