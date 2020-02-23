const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var path = require("path");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static("client/build"));
app.use(routes);

require("./routes/api.js")(app);
require("./routes/htmlRoutes.js")(app);

app.post("/submit", ({ body }, res) => {
    dbUser.create(body)
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => {
            res.json(err);
        });
});

mongoose.Proimse = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:001a001a@ds217548.mlab.com:17548/heroku_4lv8b7m7")
{
    useMongoClient: true;
}
);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

module.exports = router;
