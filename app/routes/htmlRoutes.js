var path = require("path");

module.exports = function(app) {
    // HTML GET requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML pg of content
    // REST

    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
}