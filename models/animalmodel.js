var orm = require("../config/orm.js");

var animal = {
    showAll: function(r){
        orm.selectAll("animals", function(r){
            return r;
            // some other animal specific thing
        })
    }
}

module.exports = animal;