const express = require("express");
const router = express.Router();
const Location = require("../models/Location");

const Places = require("google-places-web").default;

Places.apiKey = "AIzaSyBz8nWY0YYYkOlWlEIqWMeOT-rZghCG_bE";

router.get("/addshop", (req, res) => {
  res.render("addshop");
});

router.get("/coffeename", (req, res, next) => {
  let partialName = req.query.name;
  console.log(partialName);
  const radius = 2000;
  const language = "en";

  Places.autocomplete({ input: partialName, radius, language, type: ["cafe"] })
    .then(results => {
      res.send(results);
    })
    .catch(e => console.log(e));
});

router.post("/addshop", (req, res, next) => {
  const {
    name,
    alternativemilk,
    coconutmilk,
    soymilk,
    oatmilk,
    almondmilk,
    Wifi,
    Seating,
    Food,
    Bfast,
    Pastries,
    GF,
    Vegan
  } = req.body;

  Location.create({
    name,
    alternativemilk: !!alternativemilk,
    coconutmilk: !!coconutmilk,
    soymilk: !!soymilk,
    oatmilk: !!oatmilk,
    almondmilk: !!almondmilk,
    Wifi: !!Wifi,
    Seating: !!Seating,
    Food: !!Food,
    Bfast: !!Bfast,
    Pastries: !!Pastries,
    GF: !!GF,
    Vegan: !!Vegan
  })
    .then(() => {
      res.redirect("/");
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
