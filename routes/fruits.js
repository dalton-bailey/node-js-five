const express = require("express");
const fruit = express.Router();
const bodyParser = require("body-parser");

fruit.use(bodyParser.urlencoded({ extended: false }));
fruit.use(bodyParser.json());

const fruits = [
  { id: "1", name: "Banana" },
  { id: "2", name: "Apple" },
  { id: "3", name: "Orange" },
  { id: "4", name: "Pineapple" },
];

fruit.get("/", (req, res) => {
  res.send(fruits);
});

fruit.post("/", (req, res) => {
  const fruit = {
    id: req.body.id,
    name: req.body.name,
  };

  fruits.push(fruit);

  res.send(fruits);
});

fruit.put("/", (req, res) => {
  const index = fruits.findIndex((item) => item.id == req.body.id);
  fruits[index].name = req.body.name;
  res.send(fruits);
});

fruit.delete("/", (req, res) => {
  const index = fruits.findIndex((item) => item.id == req.body.id);
  fruits[index].name = req.body.name;

  const deleteFruit = fruits.splice(index, 1);
  res.send(deleteFruit);
});

module.exports = fruit;
