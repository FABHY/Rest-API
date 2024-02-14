const mysql = require('mysql');

var pool = mysql.createPool({
    "user": "root",
    "password": "Fabio@4040",
    "database" : "ecommerce",
     "host" : "localhost",
    "port" :  3306
});

exports.pool = pool;