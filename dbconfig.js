var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'sharing.ccctyzpxtafz.us-east-1.rds.amazonaws.com',
    user: "admin",
    password: "spaceapps",
    database: "ebdb"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected to mysql");
});

module.exports = connection;
