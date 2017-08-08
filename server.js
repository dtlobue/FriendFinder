//Dependencies
var express = require("express");

var bodyParser = require("body-parser");

var path = require("path");

var app = express();

var port = process.env.PORT || 8080;

//Body-parser stuff
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);

// Start the server
app.listen(PORT, function() {
  console.log("server up and running");
});
