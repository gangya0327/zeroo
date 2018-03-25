var x = 10;
bar() 
function bar(){
  var x = 30;
  (function (){
    console.log(x)
  })()
}

/*
1.
globalContext = {
  AO: {
    x: 10
    bar: function
  }
  Scope: null
}

2.
barContext = {
  AO: {
    x: 30
    function
  }
  Scope: globalContext.AO
}
function.[[scope]] = barContext.AO

3.
functionContext = {
  AO: {}
  Scope: barContext.AO
}
*/