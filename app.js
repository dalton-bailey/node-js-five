const express = require("express");
const app = express();

const fruitRoute = require("./routes/fruits");

app.use("/fruits", fruitRoute);

// app.use((req, res) => {
//     res.status(200).json({
//         message: 'it works'
//     })
// })

module.exports = app;
