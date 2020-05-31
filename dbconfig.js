var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'aaelm2e3aono8z.ccctyzpxtafz.us-east-1.rds.amazonaws.com',
    user: "admin",
    password: "spaceapps",
    database: "db_sharing"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected to mysql");
});

module.exports = connection;
