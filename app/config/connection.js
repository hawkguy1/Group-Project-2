// ----- SETS UP MYSQL CONNECTION ----- //
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "seat_yourself"
});
// ----- MAKES CONNECTION ----- //
connection.connect(function(err) {
  if (err) {
    console.error("ERROR CONNECTING: " + err.stack);
    return;
  }
  console.log("CONNECTED AS ID: " + connection.threadId);
});

// ----- EXPORTS CONNECTION ----- //
module.exports = connection;