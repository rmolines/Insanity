var express = require("express")
var app = express();

// app.use(express.static(__dirname + '../public/views'))
// app.use(express.static(__dirname + '../public/css'))
// app.use(express.static(__dirname + '../public/vendor'))
app.use(express.static('./public'))


app.get('/', function (req, res) {
  // res.sendFile(__dirname + '/public/indexab.html');
  res.send('VAAAI FDP')
});

// var port = process.env.PORT || 3000;
app.listen(3000, function () {
    console.log('listening on port 3000');
});
