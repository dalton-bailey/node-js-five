const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const fruits = [
    { id: "1", name: "Banana" },
    { id: "2", name: "Apple" },
    { id: "3", name: "Orange" },
    { id: "4", name: "Pineapple" },
  ];
  
  app.get("/", (req, res) => {
    res.send(fruits);
  });
  
  app.post("/", (req, res) => {
    const fruit = {
      id: req.body.id,
      name: req.body.name,
    };
  
    fruits.push(fruit);
  
    res.send(fruits);
  });
  
  app.put("/", (req, res) => {
    const index = fruits.findIndex((item) => item.id == req.body.id);
    fruits[index].name = req.body.name;
    res.send(fruits);
  });
  
  app.delete("/", (req, res) => {
    const index = fruits.findIndex((item) => item.id == req.body.id);
    fruits[index].name = req.body.name;
  
    const deleteFruit = fruits.splice(index, 1);
    res.send(deleteFruit);
  });

  module.exports = app