var Sequelize = require("sequelize");
// ----- DATABASE CONNECTION REFERENCE ----- //
var sequelize = require("../config/connection.js");
// ----- CREATES RESERVATION MODEL TO MATCH DB ----- //
var Reservations = sequelize.define("reservations", {
  // id: {
  //   type: Sequelize.INTEGER,
  //   autoIncrement: true,
  //   primaryKey: true
  // },
  author: Sequelize.STRING,
  body: Sequelize.STRING,
  created_at: Sequelize.DATE
});

// Syncs with DB
Reservations.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Chirp;