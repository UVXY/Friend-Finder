// var express = require("express");
const friends = require("../data/friendFinder.js");

// const router = express.Router();
// var friendData = require("../data/friendFinder.js");

module.exports = function(app) {
    app.get("/api/survey", function(req, res){
        res.json(friendData);
    })

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        console.log(newFriend);
        res.json(friends.compatibilaty(newFriend));
        friends.friendsArray.push(newFriend);
    })
} 