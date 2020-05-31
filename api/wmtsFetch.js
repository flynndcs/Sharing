var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var connection = require("../dbconfig.js");
const { exec } = require('child_process');

router.get("/:zoom/:latitude/:longitude", function(req, res, next){
    let arg1 = req.params.zoom;
    let arg2 = req.params.latitude;
    let arg3 = req.params.longitude;

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
