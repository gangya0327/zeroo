const http = require('http')
const fs = require('./lib/fs')
const fetch = require('./lib/fetch')

async function getInfo() {
  let data = await fetch
}
getInfo()

fetch('http://huaban.com/?page=2')
.then(data=>{
  let json = data.toString()
  json = JSON.parse(json)
  let recommends = json.recommends

  let prefix = 'http://img.hb.aicdn.com'
  let keyArr = []
  // for( let i = 0; i < recommends.length; i++ ){
  //   let obj = recommends[i]
  //   keyArr.push(obj.cover.key)
  // }
  recommends.forEach(obj=>{
    keyArr.push(obj.cover.key)
  })

  fetch(prefix + keyArr[0].then(data=>{
    //console.log(data)
    fs.writeFile(`./${keyArr[0]}.png`, data).then(data=>{
      console.log(data)
    }).catch(err=>{
      console.log(err)
    })
  })
})