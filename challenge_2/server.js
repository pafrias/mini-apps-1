var express = require('express');
var _ = require('lodash');
const PORT = 8080;
const respond = require('./controllers/controls');
const morgan = require('morgan');

//var controls = require('./router/controls.js')
var app = express();
app.use(morgan('short'));
app.get('/csv', respond.read);
app.post('/csv', respond.create);
app.use(express.static('client/src/'));

app.listen(PORT, () => { console.log(`You are now listening on ${PORT}`)})

/*
  * create the server with express, with router controllers *
  * create static page relationship
  * listen to PORT
*/