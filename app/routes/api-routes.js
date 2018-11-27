// ----- DEPENDENCIES ----- //
var connection = require("../config/connection.js");

// ----- ROUTES ----- //
module.exports = function(app) {
  // ----- GETS ALL RESERVATIONS ----- //
  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM guestInfo";
    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // ----- ADD RESERVATION ----- //
  app.post("/api/new", function(req, res) {
    console.log("RESERVATION DATA:");
    console.log(req.body);

    var dbQuery = "INSERT INTO guestInfo (resRestaurant, resMobile, resAppetizer, resTime, resGuests) VALUES (?,?,?,?,?)";

    connection.query(dbQuery, [req.body.resRestaurant, req.body.resMobile, req.body.resAppetizer, req.body.resTime, req.body.resGuests], function(err, result) {
      if (err) throw err;
      console.log("RESERVATION MADE!");
      res.end();
    });
  });
};
