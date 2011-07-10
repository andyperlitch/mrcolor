var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname));

var browserify = require('browserify');
var bundle = browserify({ entry : __dirname + '/main.js' });
app.use(bundle);

app.listen(8080);
console.log('Listening on :8080');
