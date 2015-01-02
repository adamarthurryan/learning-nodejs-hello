var express = require('express')
var app = express()


var counter = 1
app.get('/', function (req,res) {
  res.send('<p>Hello World!</p>')

  res.send('<p>You are the <em>%sth</em> viewer.</p>')
})

var server = app.listen(80, function() {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})