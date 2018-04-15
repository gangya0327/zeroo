require("common-plugin")
console.log('this is common');
function sayHello(name){
  console.log('hello world ' + name);
}
module.exports = {
  sayHello: sayHello
}