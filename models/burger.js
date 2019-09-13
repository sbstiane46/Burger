var orm = require("../config/orm.js");

var burger ={
    selectALL: function(cb){
        orm.selectALL("burgers",function(res){
            cb(res);
        })
    },

    updateOne: function(id,cb){
        orm.updateOne("burgers", id, cb);
    },

    createOne: function(name,cb){
        orm.createOne("burgers", name, cb);
    }
}

module.exports = burger;