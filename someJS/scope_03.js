var x = 10
bar()
function foo(){
  console.log(x)
}
function bar(){
  var x = 30
  foo()
}

console.log('---')

var y = 10
baa()
function baa(){
  var y = 30
  function far(y){
    console.log(y)
    //y = 80
  }
  far(40)
}