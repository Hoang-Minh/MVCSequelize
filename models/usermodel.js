// Model is data schema, aka wrapper class for sql query
var orm = require("../config/orm.js");
var user = {
    showAllUsers: function(){
        orm.selectAll("users", function(r){
            return r;
        })
    }
}

module.exports = user;