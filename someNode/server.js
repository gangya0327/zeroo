var http = require('http')

var server = http.createServer(function(req, res){
  res.end('Hello world!')
})

server.listen(5001,'127.0.0.1')