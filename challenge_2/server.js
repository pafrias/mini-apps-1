var app = require('express');
var _ = require('lodash');
const PORT = 8080;

var controls = require('./router/controls.js')

/*
  * create the server with express, with router controllers
  * create static page relationship
  * listen to PORT
//