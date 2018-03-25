
var arr = [1,2,3,5,8]
arr.splice(arr.length, 0, 9,10)
console.log(arr)
arr.splice(arr.length-1, 1)
console.log(arr)
arr.splice(0, 0, -1,0)
console.log(arr)
arr.splice(0, 1)
console.log(arr)