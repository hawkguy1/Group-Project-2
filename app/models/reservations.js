var Sequelize = require("sequelize");
// ----- DATABASE CONNECTION REFERENCE ----- //
var sequelize = require("../config/connection.js");
// ----- CREATES RESERVATION MODEL TO MATCH DB ----- //

module.exports = function (sequelize, resRestaurant, resMobile, resAppetizer, resTime, resGuests) {
    var guestInfo = sequelize.define("guestInfo", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        resRestaurant: {
            type: Sequelize.STRING
        },
        resMobile: {
            type: Sequelize.STRING
        },
        resAppetizer: {
            type: Sequelize.STRING
        },
        resTime: {
            type: Sequelize.STRING
        },
        resGuests: {
            type: Sequelize.INTEGER
        },
    },
        { freezeTableName: true });

    // guestInfo.associate = function (models) {
    // //     onDelete: "cascade"
    // };
    // guestInfo.sync({force: true}).then(function() {
    //     return guestInfo.create({
    //         resRestaurant: 'Fiesta Mexicana',
    //         resMobile: 13194040210,
    //         resAppetizer: 'Chips',
    //         resTime: '6:00',
    //         resGuests: 


    //     })
    // })
    // guestInfo.sync ();
    // module.exports = guestInfo;
    return guestInfo;
};