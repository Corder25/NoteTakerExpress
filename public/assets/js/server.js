//  Dependencies
var express = require("express");

//Creating an "express" server
var app = express();

// Sets a port 
var PORT = process.env.PORT || 3000;

//Parse the JSON data
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
//what folder the browser can see
app.use(express.static("public"));

//Bring routes
require("./js/apiRoute")(app);
require("./js/htmlRoute")(app);

//Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});