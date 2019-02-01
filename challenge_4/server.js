var express = require('express');
// var path = require('path');
const PORT = '3000';

var app = express();

app.use(express.static('./client/public'));

app.listen(PORT, console.log(`Listening live from port ${PORT}`))