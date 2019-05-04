var mysql = require("mysql");
var conn = mysql.createConnection({
  host: "ip address",
  port: "port",
  user: "userid",
  password: "password",
  database: "db name"
});

conn.connect(function(err) {
  if (err) throw err;
});

module.exports = conn;
/*
module.exports = function() {
  var mysql  = require('mysql');
  var conn = mysql.createConnection(methods);
  conn.connect();
  return conn
}
*/
