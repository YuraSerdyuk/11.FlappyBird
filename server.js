var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/', function(req, res) {
    res.render('index');
});


http.listen(5000, function(){
    console.log('listening on: 5000 port');
});


