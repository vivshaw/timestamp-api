var express = require('express');
var moment = require('moment');

var app = express();

app.use(express.static('static'));
app.set('views', 'templates');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', {basedir: __dirname});
});

app.get('/api/', function (req, res) {
  var months = ['January','February','March','April','May','June','July',
                'August','September','October','November','December'];
  var query = req.query.date;
  var date = moment(isNaN(query) ? query : query * 1000);
  
  if (query && date.isValid()) {
    res.send({
      unix: date.unix(),
      natural: `${months[date.month()]} ${date.date()}, ${date.year()}`
    });
  } else {
    res.send({unix: null, natural: null});
  }
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Timestamp app listening!');
});