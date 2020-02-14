// Requiring path to so we can use relative routes to our HTML files
var path = require("path");


module.exports = function (app) {

    // Homepage
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })

    // Stats Page
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    })

    // Exercise Page
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    })
};