var x = 10;
bar()
function bar() {
  var x = 30;
  function foo() {
    console.log(x)
  }
  foo();
}

/*
1.
globalContext = {
  AO: {
    x: 10
    bar: function
  },
  Scope: null
}
bar.[[scope]] = globalContext.AO

2.
barContext = {
  AO: {
    x: 30
    foo: function
  },
  Scope: globalContext.AO
}
foo.[[scope]] = barContext.AO

3.fooContext = {
  AO: {},
  Scope: barContext.AO
}
*/