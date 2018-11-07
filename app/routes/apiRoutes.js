var friendData = require("../data/friendFinder.js");

module.exports = function(app) {
    app.get("/api/survey", function(req, res){
        res.json(friendData);
    })

    
}