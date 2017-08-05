var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({defaultLayouts:"main"}));
app.set("view engine", "handlebars");
var PORT = process.env.PORT || 3011;

app.get("/", function(req, res){
  connection.query("SELECT * FROM ___________;", function(err,data){
    res.render("index", {/*MY SQL OBJECT FOR INDEX.HTML {{EACH}} HERE*/});
  })
})