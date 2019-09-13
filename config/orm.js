var  connection = require("./connection.js");

var orm = {
    selectALL: function (tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, results){
            if (err) {throw err;
            }
            callback(results);
        })
    },

    updateOne: function(tableInput, condition, callback) {
        var queryString2 = "UPDATE " + tableInput + " SET devoured=true WHERE id=" + condition + ";"
        connection.query(queryString2, function(err,result){
            if(err) {throw err;
            }
            callback(result);
        })
    },

    createOne: function(tableInput,val,callback){
        var queryString3 = ("INSERT INTO " + tableInput + " (burger_name) VALUES ('" + val + "');")
        connection.query(queryString3, function(err,result){
                if(err){throw err;
                }
                callback(result);
        })
        }
    }


module.exports = orm;