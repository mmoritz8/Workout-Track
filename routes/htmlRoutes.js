var path = require("path");

module.exports = function (app) {
    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "/public/exercise.html"));
    });
};


module.exports = function (app) {
    app.get("/stat", function (req, res) {
        res.sendFile(path.join(__dirname, "/public/stat.html"));
    });
};