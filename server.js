var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var path = require("path");

var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.resolve(__dirname + '/public/')));
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({defaultLayout:"main"}));

app.set("view engine", "handlebars");

var PORT = process.env.PORT || 3011;

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT);


