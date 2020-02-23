const express = require("express");
const mongoose = require("mongoose");
const logger = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
mongoose.Proimse = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:001a001a@ds217548.mlab.com:17548/heroku_4lv8b7m7")
{
    useMongoClient: true;
    useUnifiedTopology: true;
};
// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/htmlRoutes.js"));


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});