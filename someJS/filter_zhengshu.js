// var arr = [3,1,0,-1,-3,2,-5]
// function filter(arr){
//   var len = arr.length
//   for(var i = 0; i < len; i++){
//     if(arr[i] <= 0){
//       arr.splice(i,1)
//       i--
//     }
//   }
// }
// filter(arr)
// console.log(arr) // [3,1,2]

var arr = [3,1,0,-1,-3,2,-5]
function filter(arr){
  var newArr = []
  var len = arr.length
  for(var i = 0; i < len; i++){
    if(arr[i] > 0){
      newArr.push(arr[i])
    }
  }
  return newArr
}
var arr2 = filter(arr)
console.log(arr2) // [3,1,2]
console.log(arr)  // [3,1,0,-1,-2,2,-5]