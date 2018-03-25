function fn(name,age,address){
  var len = arguments.length
  for(var i = 0; i < len; i++){
    console.log(arguments[i])
  }
}
fn('perter',16,'hangzhou')