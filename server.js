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

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "movie_planner_db",
  port:8889
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);

});

app.get("/", function(req, res){
  connection.query("SELECT * FROM ___________;", function(err,data){
    res.render("index", {/*MY SQL OBJECT FOR INDEX.HTML {{EACH}} HERE*/});
  })
})