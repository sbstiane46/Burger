var  connection = require("../config/connection.js");

var orm ={

selectALL: function (table,cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, table, function (err, results) {
        if (err) throw err;
        cb(results);
    });
},

insertOne: function (col, value, cb) {
    var queryString = "INSERT INTO burgers (??) VALUES(?);";
    connection.query(queryString, [col, values], function (err, results) {
        if (err) throw err;
        cb(results);
    });
},
updateONE: function (table, UPD_col, newValue, WHERE_col, id_value, cb) {
    var queryString = "UPDATE ?? SET ? = WHERE ?? = ?";
connection.query(queryString, [table, UPD_col. newValue, WHERE_col, id_value], function (err, results) {
    if (err) throw err;
    cb(results);
});
}
}
module.exports = orm;