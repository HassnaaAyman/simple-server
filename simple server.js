
///// simple server with express
var express = require('express')
const path = require('path')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/myProfile', function (req, res) {
    res.send('myProfile')
})


app.get('/myImg/:id', function (req, res) {
    res.sendFile(path.join(__dirname, 'assets', req.params.id + '.jpg'))
})


/////////simple server without express
app.listen(3000)

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead('200', { 'content-type': 'text/html' });
    res.end('hello from simple node server');
}).listen(5000);