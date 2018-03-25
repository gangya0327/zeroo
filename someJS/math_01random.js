function random1(a,b){
  return Math.floor( Math.random() * Math.abs(b-a) + Math.min(a,b) )
}
//console.log(random1(1,20))

function getRandColor(){
  var dict = '0123456789abcdef'
  var str = ''
  for(var i = 0; i < 6; i++){
    str += dict[random1(0,16)]
  }
  return str
}
var color = getRandColor()
console.log(color)   // #3e2f1b

function getRandIP(){
  var str = []
  for(var i = 0; i < 4; i++){
    str.push(random1(0, 256))
  }
  str = str.join('.')
  return str
}
var ip = getRandIP()
console.log(ip) // 10.234.121.45

function getRandStr(len){
  var dict = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var str = ''
  for(var i = 0; i < len; i++){
    str += dict[random1(0, 63)]
  }
  return str
}
var str = getRandStr(10); // 0a3iJiRZap
console.log(str) 