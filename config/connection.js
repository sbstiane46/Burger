var mysql = require("mysql");
var connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "123abc",
    database: "burgers_db"
});

module.exports = connection;
