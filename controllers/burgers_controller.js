var express = require("express")
var router = express.Router();
var Burger = require("../models/burger.js");

router.get("/", function(req, res){
    Burger.all(function(data) {
        var hbsObject = {
            Burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res){
    Burger.create([
        "Burger_name", "devoured"
    ], [
        req.body.Burger_name, req.body.devoured
    ], function(){
        res.redirect("/");
    });
});

router.put("/:id", function(req, res){
    var condition = "id = " + req.parmas.Burger_name;
    console.log("condition", condition);
    Burger.update({
        devoured: req.body.devoured
    },  condition, function(){
        res.redirect("/");
    });
});

router.delete("/:id", function(req, res){
    var condition = "id = " + req.params.Burger_name;
    Burger.delete(condition, function(){
        res.redirect("/");
    });
});

module.exports = router;