var orm = require("../config/orm.js");

var burger ={
    selectALL: function(cb){
        orm.selectALL("burgers",function(res){
            cb(res);
        })
    },

    update: function(id,cb){
        orm.update("burgers", id,cb);
    },

    create: function(name,cb){
        orm.create("burgers", name, cb);
    }
}

module.exports = burger;