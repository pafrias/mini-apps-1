var express = require('express');
var _ = require('lodash');
const PORT = 8080;
const respond = require('./controllers/controls')

//var controls = require('./router/controls.js')

var app = express();
app.use(express.static('client/src/'));
app.use(express.json());
app.get('/csv', respond.read);
app.post('/csv', respond.create);

app.listen(PORT, () => { console.log(`You are now listening on ${PORT}`)})

/*
  * create the server with express, with router controllers *
  * create static page relationship
  * listen to PORT
*/