const express = require("express");
const app = express();

const fruitRoute = require("./routes/fruits");

app.use("/fruits", fruitRoute);

module.exports = app;
