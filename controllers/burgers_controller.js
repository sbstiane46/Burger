var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hdbrsObj = {
        burgers: data
      };
      console.log(hdbrsObj);
      res.render("index", hdbrsObj);
    });
  
  
      console.log("condition", condition);
      burger.update({ devoured: req.body.devoured }, condition, function(
        result
      ) {
        if (result.changedRows === 0) {
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
    });

  module.exports = router;