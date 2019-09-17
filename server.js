var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


var app = express();
app.use(express.static(__dirname + "/public"));


app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

var routes = require("./controllers/routes.js");
app.use("/", routes);

var PORT = 3000;
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


// app.use(express.json());
// app.use(express.static("public"));
// var router = require("./controllers/burgers_controller.js");
// app.use(router);