// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

//require the routes to the server

require("../routing/apiRoutes")(app);
require("../routing/htmlRoutes")(app);


//Creating a listener for th port
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
