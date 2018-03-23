person = {
  name: "peter",
  age: 21,
  email: "www.163.com",
  comp: "baidu",
  home: "hangzhou"
}
//在对象原型上增加 clone()的方法
if( typeof Object.prototype.clone === 'undefined'){
  Object.prototype.clone = function(){
    console.log(5)
  }
}

console.log('--')
//不做过滤，会导致clone()函数显示出来
for (item in person){
  console.log(item + ": "+person[item])
}

console.log('--')
//hasOwnProperty()方法过滤原型属性
for (item in person){
  if(person.hasOwnProperty(item)){
    console.log(item, '=', person[item] )
  }
}
console.log('--')
//取消Object.prototype上的方法
for (item in person){
  if(Object.prototype.hasOwnProperty.call(person, item)){
    console.log(item, ':', person[item])
  }
}