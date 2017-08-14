var orm = require("../config/orm.js");

var Burgers = {
    all: function(cb){
        orm.all("Burgers", function(res){
            cb(res);
        });
    },

    create: function(cols, vals, cb) {
        orm.create("Burgers", cols, vals, function(res){
            cb(res);
        });
    },

    update: function(cols, vals, cb){
        orm.update("Burgers", cols, vals, function(res){
            cb(res);
        });
    },

    delete: function(condition, cb){
        orm.delete("Burgers", cols, vals, function(res){
            cb(res);
        })
    }
};

module.exports = Burgers;