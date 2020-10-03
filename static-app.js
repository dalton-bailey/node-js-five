const express = require("express");
const two = express();

const webpageRoute = require("./routes/webpage");

two.use("/webpage", webpageRoute);

module.exports = two;
