const mysql = require('mysql');
exports.pool = mysql.createPool({
    host: "localhost",
    user: "lounis",
    port: 3306 ,
    password: "start",
    database:"kamoplast"
    // connectionLimit:10  
  });
  
 