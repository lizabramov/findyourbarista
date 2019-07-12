const express = require("express");
const router = express.Router();
const Location = require("../models/Location");
const Places = require("google-places-web").default;

Places.apiKey = "AIzaSyBz8nWY0YYYkOlWlEIqWMeOT-rZghCG_bE";
/* GET home page */
router.get("/", (req, res, next) => {
  // locate the IP & get coordinates
  res.render("index");
});

router.get("/api/shops", (req, res, next) => {
  Location.find({}).then(shops => {
    res.json(shops);
  });
});

router.get("/api/shops", (req, res, next) => {
  Location.find({}).then(locations => {
    res.json(locations);
  });
});

router.get("/api/coffee/:coordinates", (req, res, next) => {
  Places.nearbysearch({
    location: req.params.coordinates
      .split(",")
      .reverse()
      .join(","), // set this as current location
    type: ["cafe"],
    rankby: "distance"
  })
    .then(result => {
      res.json(result);
    })
    .catch(e => console.log(e));
});

module.exports = router;
