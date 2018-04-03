var color = {r: 8, g: 219, b: 85}

var rgb2hex = function(r,g,b){
  // (1 << 24)的作用为保证结果是6位数
  return '#' + ( (r<<16) + (g<<8) + b ).toString(16).substr(1)
  // 先转成十六进制，然后返回字符串
  // 去除字符串的最高位，返回后面六个字符串
}

console.log( rgb2hex(color.r, color.g, color.b) )