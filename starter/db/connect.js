const { connect } = require("mongoose");
var mysql = require("mysql");

const connectDB = (host, username, password, db) => {
  var connection = mysql.createConnection({
    host: host,
    user: username,
    password: password,
    db: db
  });
  return connection.connect();
};

module.exports = connectDB;
