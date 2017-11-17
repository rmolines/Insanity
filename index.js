var express = require("express")
var app = express();
var bodyParser     =         require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.static(__dirname + '../public/views'))
// app.use(express.static(__dirname + '../public/css'))
// app.use(express.static(__dirname + '../public/vendor'))
app.use(express.static('./public'))


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/indexab.html');
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('listening on port ' + port);
});
