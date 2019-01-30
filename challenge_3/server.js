var express = require('express');
var bodyParser = require('body-parser');
var router = require('./controllers/router');
var app = express();

app.use(bodyParser.json());

app.use(express.static('./public/'));


app.post('/checkout', router.create);