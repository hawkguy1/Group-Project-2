var orm = require("../config/orm.js");

var tables = {
    all: function(cb) {
      orm.all("table_availability", function(res) {
        cb(res);
      });
    },
    create: function(cols, vals, cb) {
      orm.create("table_availability", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("table_availabilty", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };