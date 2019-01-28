// var express = require("express");
var friends = require("../data/friendFinder");

// const router = express.Router();
// var friendData = require("../data/friendFinder.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        res.json(friends);
    })

    app.post("/api/friends", function(req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            compatibilaty: Infinity
        };

        var newFriend = req.body;
        var userScore = newFriend.scores;

        var scoreDif;

        for (var i = 0; i < friends.length; i++){
            var bestFriend = friends[i];
            scoreDif = 0;
            console.log(bestFriend.name);

            for (var n = 0; n < bestFriend.scores.length ; n++) {
                var bestFriendScore = bestFriend.scores[j];
                var newUserScore = userScore[j];

                scoreDif += Math.abs(parseInt(newUserScore) - parseInt(bestFriendScore))
            }
            if (scoreDif <= bestMatch.compatibilaty) {
                bestMatch.name = newFriend.name;
                bestMatch.photo = newFriend.photo;
                bestMatch.compatibilaty = scoreDif;
            }
        }
        console.log(newFriend);
        res.json(friends.compatibilaty(newFriend));
        friends.friendsArray.push(newFriend);
    })
} 