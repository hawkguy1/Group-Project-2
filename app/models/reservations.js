var Sequelize = require("sequelize");
// ----- DATABASE CONNECTION REFERENCE ----- //
var sequelize = require("../config/connection.js");
// ----- CREATES RESERVATION MODEL TO MATCH DB ----- //

module.exports = function(sequelize, resRestaurant, resMobile, resAppetizer, resTime, resGuests) {
var Reservations = sequelize.define("guestInfo", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  resRestaurant: Sequelize.INTEGER,
  resMobile: Sequelize.STRING,
  resAppetizer: Sequelize.STRING,
  resTime: Sequelize.STRING,
  resGuests: Sequelize.INTEGER
});

Reservations.associate = function(models) {
    onDelete: "cascade"
};
return Reservations;
};