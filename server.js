// ----- NODE/EXPRESS SERVER DEPENDENCIES ----- //
var express = require("express");
var db = require("./app/models");

// ----- INITIALIZES EXPRESS ----- //
var app = express();
var PORT = process.env.PORT || 8080;

// ----- REQURE MODELS FOR SYNCING ----- //
(express.json());

// ----- STATIC DIRECTORY ----- //
app.use(express.static("app/public"));

// ----- ROUTES ----- //
require("./app/routes/api-routes.js")(app);

// ----- SERVER LISTENING ----- //
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("APP LISTENING ON PORT " + PORT);
    });
});

// ----- REQURE DATA PARSING ----- //
app.use(express.urlencoded({ extended: true }));
app.use