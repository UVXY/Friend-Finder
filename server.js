var express = require("express");

var app =  express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ entended: true }));
app.use(express.json());

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("http://localhost:" + PORT);
}); 