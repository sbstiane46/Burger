var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.static("public"));

var router = require("./controllers/burgers_controller.js");
app.use(router);



