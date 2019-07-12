const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  name: String,
  alternativemilk: Boolean,
  coconutmilk: Boolean,
  soymilk: Boolean,
  oatmilk: Boolean,
  almondmilk: Boolean,
  Wifi: Boolean,
  Seating: Boolean,
  Food: Boolean,
  Bfast: Boolean,
  Pastries: Boolean,
  GF: Boolean,
  Vegan: Boolean
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
