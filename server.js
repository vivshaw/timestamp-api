var express = require('express')
var pug = require('pug')

var app = express()
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(8080, function () {
  console.log('Timestamp app listening on port 8080!')
})