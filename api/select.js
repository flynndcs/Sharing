var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var connection = require("../dbconfig.js")

router.get("/posts", function(req, res, next){
    connection.connect(function(err){
        connection.query(`SELECT * FROM posts`,
            function(err, result){
                if (err) throw err;
                res.send(result);
            });
    });
});

module.exports = router;
