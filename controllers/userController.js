// Control is route controller
var express = require("express");
var router = express.Router();
var user = require("../models/usermodel.js");

var routes = {
    get: router.get("/users", function(req, res){
        user.showAllUsers()
    })
};

module.exports = routes;