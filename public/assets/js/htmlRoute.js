//Path package to get the file pathe for the html
const path = require("path");


module.exports = function(app) {
    
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/index.html"));
    });
    
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/notes.html"));
    });

    


}