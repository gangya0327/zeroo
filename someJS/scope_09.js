var a = 1;
function fn(){
  console.log(a)
  var a = 5
  console.log(a)
  a++
  var a
  fn3()
  fn2()
  console.log(a)

  function fn2(){
    console.log(a)
    a = 20
  }
}
function fn3(){
  console.log(a)
  a = 200
}
fn()
console.log(a)

undefined
5
1
6
20
200

/*
1.
globalContext = {
  AO: {
    a: 1
    fn: function
    fn3: function
  }
  Scope: null
}
fn.[[scope]] = globalContext.AO
fn3.[[scope]] = globalContext.AO
2.
fnContext = {
  AO: {
    a: 5
    fn2: function
  }
  Scope: globalContext.AO
}
fn2.[[scope]] = fnContext.AO
3.
fn3Context = {
  AO: {}
  Scope: globalContext.AO
}
4.
fn2Context =　{
  AO: {}
  Scope: globalContext.AO
}
*/