// ----- DEPENDENCIES ----- //
var connection = require("../config/connection.js");

// ----- ROUTES ----- //
module.exports = function(app) {
  // ----- GETS ALL RESERVATIONS ----- //
  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM table_reservations";
    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // ----- ADD RESERVATION ----- //
  app.post("/api/new", function(req, res) {
    console.log("RESERVATION DATA:");
    console.log(req.body);

    var dbQuery = "INSERT INTO table_reservations (name, num_in_party, phone_number, created_at) VALUES (?,?,?,?)";

    connection.query(dbQuery, [req.body.name, req.body.num_in_party, req.body.phone_number, req.body.created_at], function(err, result) {
      if (err) throw err;
      console.log("RESERVATION MADE!");
      res.end();
    });
  });
};
