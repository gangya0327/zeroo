function sumOfSquare(){
  var sum = 0
  for(var i=0; i<arguments.length; i++){
    sum += Math.pow( arguments[i], 2 )
  }
  return sum
}
console.log( sumOfSquare(2,2,2) )