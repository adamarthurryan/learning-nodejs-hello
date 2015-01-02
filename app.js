var express = require('express')
var app = express()


var counter = 1
app.get('/', function (req,res) {
  var response = ''
  response += '<p>Hello World!</p>'
  response += '<p>You are the <em>'+counter+'th</em> viewer.</p>'
  
  res.send(response)

  counter++
})

var server = app.listen(8080, function() {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})