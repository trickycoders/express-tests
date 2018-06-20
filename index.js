var express = require('express');
var bodyParser = require('body-parser');
var userRoutes =  require('./routes/user');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', userRoutes.login);

app.listen(8082, function() {
    console.log("App listening at post", 8082)
});
