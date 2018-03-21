var x = 10
bar()
function foo() {
  console.log(x)
}
function bar() {
  var x = 30
  foo()
}

/*
1.
globalContext = {
  AO: {
    x: 10
    bar: function
    foo: function
  }
  Scope: null
}
bar.[[scope]] = globalContext.AO
foo.[[scope]] = globalContext.AO

2.
barContext = {
  AO: {
    x: 30
  }
  Scope: globalContext.AO
}

3.
fooContext = {
  AO: {}
  Scope: globalContext.AO
}
*/