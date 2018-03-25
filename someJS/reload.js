function fn(name, age, address){
  var len = arguments.length
  if(len==1){
    console.log('my name is ' + name)
  }
  if(len==2){
    console.log('my name is ' + name,'i\'m' + age)
  }
  if(len==3){
    console.log('my name is ' + name,'i\'m' + age,'i\' in ' + address)
  }
}
fn('peter')
fn('peter',16)
fn('peter',26,'hangzhou')