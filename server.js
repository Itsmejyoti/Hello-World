var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');

var app = express();

app.listen(process.env.PORT || 5000);

app.use(express.static('public'));
app.use(bodyParser.json());

