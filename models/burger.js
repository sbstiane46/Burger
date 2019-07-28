var orm = require("../config/orm.js");

var burger ={
    selectALL: function(cb){
        orm.selectALL("burgers",function(res){
            cb(res);
        })
    },
}

module.exports=burger;