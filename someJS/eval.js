function fn(){
  console.log(43)
}
//fn()
setTimeout(fn, 500)

console.log(typeof un);    // "undefined"
console.log(typeof deux); // "undefined"
console.log(typeof trois); // "undefined"

var jsstring = "var un = 1; console.log(un);";
eval(jsstring); // logs "1"

jsstring = "var deux = 2; console.log(deux);";
new Function(jsstring)(); // logs "2"

jsstring = "var trois = 3; console.log(trois);";
(function () {
   eval(jsstring);
}()); // logs "3"

console.log(typeof un); // number
console.log(typeof deux); // "undefined"
console.log(typeof trois); // "undefined"