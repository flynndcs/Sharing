var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var connection = require("../dbconfig.js");

router.post("/post", function(req, res, next){
    console.log("inside create/post");
    var userSession = req.session;
    if (!userSession.userName){
        userSession.userName = 'user' + Math.floor((Math.random() * 1000000) + 1);
    }
    connection.connect(function(err){
        connection.query('INSERT INTO posts VALUES (?, ?, ?, ?)',
            [
                userSession.userName,
                req.body.post,
                0,
                req.body.post_id

            ],
            function(err, result){
                if (err) throw err;
                res.send(result);
            }
        );
    });
});

router.post("/like", function(req, res, next){
    var userSession = req.session;
    if (!userSession.userName){
        userSession.userName = 'user' + Math.floor((Math.random() * 1000000) + 1);
    }
    console.log(userSession.userName);
    connection.connect(function(err){
        connection.query('UPDATE posts SET likes = likes + 1 WHERE post_id=?',
            [
                req.body.post_id
            ],
            function(err, result)
            {
                if (err) throw err;
                res.send(result);
            }
        );
    });
});

module.exports = router;
