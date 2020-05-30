var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var connection = require("../dbconfig.js");
const { exec } = require('child_process');

router.get("/:lat/:longitude/:zoom", function(req, res, next){
    let arg1 = req.params.lat;
    let arg2 = req.params.longitude;
    let arg3 = req.params.zoom;

    connection.connect(function(err){
        console.log("connected to database");
    });

    const pythonProcess = exec(`python api/wmtsFetch.py ${arg1} ${arg2} ${arg3}`, (error, stdout, stderr) => {
        if (error) throw error;
        res.send(stdout);
        console.log(stderr);
    });

});
module.exports = router;
