var obj = {
  name: 'peter',
  age: 20,
  friend: {
    name: 'raven',
    sex: 'female'
  }
}

function shallowCope(obj){
  var newObj = {}
  for(key in obj){
    if(obj.hasOwnProperty(key)){
      newObj[key] = obj[key]
    }    
  }
  return newObj
}

function deepCopy(obj){
  var newObj = {}
  for(key in obj){
    if(obj.hasOwnProperty(key)){
      //newObj[key] = obj[key]
      if( typeof obj[key] === 'number' ||
          typeof obj[key] === 'string' ||
          typeof obj[key] === 'boolean' ||
                 obj[key] === 'undefined' ||
                 obj[key] === 'null' ){
            newObj[key] = obj[key]
      }
      if( typeof obj[key] === 'object' ){
        newObj[key] = deepCopy(obj[key])
      }
    }    
  }
  return newObj
}

function deepCopy2(obj){
  return JSON.parse(JSON.stringify(obj))
}

var newObj = deepCopy2(obj)
obj.name = 'ming'
console.log(obj.name)
console.log(newObj.name)
console.log('---')
obj.friend.name = 'yu'
console.log(obj.friend.name)
console.log(newObj.friend.name)