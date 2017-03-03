var express = require('express')
var moment = require('moment')

var app = express()
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/:date', function (req, res) {
  var months = ['January','February','March','April','May','June','July',
                'August','September','October','November','December']
  var query = req.params.date
  var date = new moment(isNaN(query) ? query : query * 1000)
  
  if (date.isValid()) {
    res.send({
      unixtime: date.unix(),
      natural: `${months[date.month()]} ${date.date()}, ${date.year()}`
    })
  } else {
    res.send({})
  }
})


app.listen(8080, function () {
  console.log('Timestamp app listening on port 8080!')
})