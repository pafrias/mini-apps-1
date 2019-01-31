var express = require('express');
var bodyParser = require('body-parser');
var router = require('./controllers/router');

const PORT = '8080'

var app = express();

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/checkout', router.read);

app.post('/checkout', router.create);

app.listen(`${PORT}`, console.log('Listening on 8080'));